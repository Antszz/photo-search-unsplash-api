from dotenv import load_dotenv
from flask import Flask
from flask import jsonify
from flask_cors import CORS

from serializers.photo import PhotoSchema
from services.unsplash import get_photos_by_query
from services.unsplash import get_random_photos_from_unsplash

load_dotenv()
app = Flask(__name__)
CORS(app)


@app.route('/api/get-random-photos')
def get_random_photos():
    try:
        random_photos = get_random_photos_from_unsplash()
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    result = PhotoSchema(many=True).dump(random_photos)
    return jsonify(result)


@app.route('/api/search/<query>')
def search_photos(query):
    try:
        query_photos = get_photos_by_query(query)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    result = PhotoSchema(many=True).dump(query_photos)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
