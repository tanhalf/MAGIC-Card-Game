from flask import Flask, render_template, jsonify
import requests
import json
import subprocess

app = Flask(__name__)

code_executed = False


draw_function = "draw"

draw_js = f"""
const script = require('./MAGIC.js');
script.{draw_function}();
"""



@app.route("/")
def index():
    return render_template("MAGIC.html")

turn = 0

@app.route("/", methods=["POST"])
def add():
    global turn
    turn = turn +1
    res = str(turn)
    return res

# def hand():
#     if turn == -1:
#         subprocess.run(['node', '-e', draw_js])

if __name__ == '__main__':
    app.run(debug=True)