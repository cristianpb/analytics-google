from flask import Flask, render_template, send_from_directory
import json
from analytics import main
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

#@app.route('/<path:filename>')
#def show_pages(filename):
#    return send_from_directory('./static/', filename)

@app.route("/data")
def hello():
    res = main()
    return json.dumps(res)


if __name__ == "__main__":
    app.run(debug=True, port=5001)
