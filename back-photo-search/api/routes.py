from flask import Blueprint
from flask import jsonify

from serializers.photo import PhotoSchema
from services.unsplash_service import get_photos_by_query
from services.unsplash_service import get_random_photos_from_unsplash
from utils.decorators import handle_exceptions
from utils.utils import serialize_in_paralell

api = Blueprint('api', __name__)


@api.route('/get-random-photos', methods=['GET'])
@handle_exceptions
def get_random_photos():
    random_photos = get_random_photos_from_unsplash()
    result = serialize_in_paralell(
        random_photos,
        schema=PhotoSchema()
    )
    return jsonify(result)


@api.route('/search/<query>', methods=['GET'])
@handle_exceptions
def search_photos(query):
    query_photos = get_photos_by_query(query)
    result = serialize_in_paralell(
        query_photos,
        schema=PhotoSchema()
    )
    return jsonify(result)
