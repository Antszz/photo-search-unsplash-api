import logging
from typing import List

from constants import UNSPLASH_API_URL
from constants import MAX_THREADS
from singleton.unsplash_session import UnsplashSession

logger = logging.getLogger(__name__)


def get_random_photos_from_unsplash(num_photos: int = MAX_THREADS) -> List[dict]:
    # See https://unsplash.com/documentation#get-a-random-photo
    url = f'{UNSPLASH_API_URL}/photos/random'
    params = {'count': num_photos}
    session = UnsplashSession()
    response = session.get(url, params=params)
    if response.status_code != 200:
        logger.error(f'Failed to get random photos from Unsplash: {response.status_code} {response.text}')
        return []
    return response.json()


def get_photos_by_query(query: str) -> List[dict]:
    # See https://unsplash.com/documentation#search-photos
    url = f'{UNSPLASH_API_URL}/search/photos'
    params = {'query': query}
    session = UnsplashSession()
    response = session.get(url, params=params)
    if response.status_code != 200:
        logger.error(f'Failed to search photos on Unsplash: {response.status_code} {response.text}')
        return []
    return response.json()['results']


def get_tags_by_photo_id(photo_id: str) -> List[str]:
    # See https://unsplash.com/documentation#get-a-photo
    url = f'{UNSPLASH_API_URL}/photos/{photo_id}'
    session = UnsplashSession()
    response = session.get(url)
    if response.status_code != 200:
        logger.error(f'Failed to get tags for photo {photo_id}: {response.status_code} {response.text}')
        return []
    result = response.json()
    tags = result.get('tags', [])
    return [ tag['title'] for tag in tags]
