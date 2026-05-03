from flask import Flask, render_template, jsonify
import requests, json, subprocess, os, psycopg2

app = Flask(__name__)

code_executed = False


draw_function = "draw"

draw_js = f"""
const script = require('./MAGIC.js');
script.{draw_function}();
"""

conn = psycopg2.connect(
    dbname="magic_db",
    user="postgres",
    password="password",
    host="localhost",
    port=5432
)

@app.route("/")
def index():
    return render_template("MAGIC.html")

@app.route("/draw", methods=["GET"])
def draw_card():
    
    try:
        #conn.rollback()
        cur = conn.cursor()

        cur.execute(
            """
            SELECT * 
            FROM cards 
            ORDER BY RANDOM() 
            LIMIT 1;
            """
        )

        cardx = cur.fetchone()

        return jsonify({
            "id": cardx[0],
            "name": cardx[1],
            "type": cardx[2],
            "description": cardx[3],
            "value": cardx[4]
        })

    except Exception as e:
        conn.rollback()
        print("DB ERROR:", e)
        return jsonify({"error": str(e)}), 500

turn = 0

@app.route("/", methods=["POST"])
def add():
    global turn
    turn = turn +1
    res = str(turn)
    return res

def hand():
    if turn == -1:
        subprocess.run(['node', '-e', draw_js])

if __name__ == '__main__':
    app.run(debug=True)