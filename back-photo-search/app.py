from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS

from api.routes import api

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


def setup(app: Flask):
    load_dotenv()
    app.register_blueprint(api, url_prefix='/api')


if __name__ == '__main__':
    setup(app)
    app.run(debug=True, host='0.0.0.0', port=5000)
