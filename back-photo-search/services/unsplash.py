import os
from typing import List
from requests_cache import CachedSession

UNSPLASH_API_URL = 'https://api.unsplash.com'
session = CachedSession(cache_name='unsplash_cache', backend='sqlite', expire_after=3600)
session.headers.update({'Authorization': f'Client-ID {os.getenv("UNSPLASH_ACCESS_KEY")}'})


def get_random_photos_from_unsplash(num_photos: int = 10) -> dict:
    # See https://unsplash.com/documentation#get-a-random-photo
    url = f'{UNSPLASH_API_URL}/photos/random'
    params = {'count': num_photos}
    response = session.get(url, params=params)
    return response.json()


def get_tags_by_photo_id(photo_id: str) -> List[str]:
    # See https://unsplash.com/documentation#get-a-photo
    url = f'{UNSPLASH_API_URL}/photos/{photo_id}'
    session.headers.update({'Authorization': f'Client-ID {os.getenv("UNSPLASH_ACCESS_KEY")}'})
    response = session.get(url)
    result = response.json()
    tags = result.get('tags', [])
    return [ tag['title'] for tag in tags]


def get_photos_by_query(query: str) -> dict:
    # See https://unsplash.com/documentation#search-photos
    url = f'{UNSPLASH_API_URL}/search/photos'
    params = {'query': query}
    response = session.get(url, params=params)
    return response.json()['results']
