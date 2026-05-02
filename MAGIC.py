from flask import Flask, render_template, jsonify
import requests, json, subprocess, os, psycopg2

app = Flask(__name__)

code_executed = False


draw_function = "draw"

draw_js = f"""
const script = require('./MAGIC.js');
script.{draw_function}();
"""

# connect = psycopg2.connect(
#     dbname = os.getenv("MAGIC_DB"),
#     user = os.getenv("DB_USER"),
#     password = os.getenv("DB_PASSWORD"),
#     host = "localhost",
#     port = 5432
# )

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

@app.route("/draw", methods=["POST"])
def draw_card():
    cur = psycopg2.connect.cursor()

    cur.execute(
        """
        SELECT type, name, description, value 
        FROM cards 
        ORDER BY RANDOM() 
        LIMIT 1;
        """
    )

    psycopg2.connect.commit()
    card = cur.fetchone()

    return jsonify({
        "type": card[0],
        "name": card[1],
        "description": card[2],
        "value": card[3]
    })

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