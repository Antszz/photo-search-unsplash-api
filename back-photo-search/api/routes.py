from flask import Blueprint
from flask import jsonify

from serializers.photo import PhotoSchema
from services.unsplash_service import get_photos_by_query
from services.unsplash_service import get_random_photos_from_unsplash

api = Blueprint('api', __name__)



@api.route('/get-random-photos', methods=['GET'])
def get_random_photos():
    try:
        random_photos = get_random_photos_from_unsplash()
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    result = PhotoSchema(many=True).dump(random_photos)
    return jsonify(result)


@api.route('/search/<query>', methods=['GET'])
def search_photos(query):
    try:
        query_photos = get_photos_by_query(query)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    result = PhotoSchema(many=True).dump(query_photos)
    return jsonify(result)
