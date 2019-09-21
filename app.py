from flask import Flask, render_template, send_from_directory
import json
import pandas as pd
from analytics import main
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data.csv')
def show_pages():
    return send_from_directory('./', 'data.csv')

#@app.route("/data")
#def data():
#    res = pd.read_csv('data/data.csv')
#    return res.to_csv(index=False)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
