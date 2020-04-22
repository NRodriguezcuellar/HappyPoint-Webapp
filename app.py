from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def startpage():
    return render_template('startpage.html')


if __name__ == '__main__':
    app.run()
