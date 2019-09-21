from flask import Flask, render_template, send_from_directory
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/data.csv')
def show_pages():
    return send_from_directory('./', 'data.csv')


if __name__ == "__main__":
    app.run(debug=True, port=5001)
