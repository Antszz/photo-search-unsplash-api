import os

from requests_cache import CachedSession

from singleton.singleton import SingletonMeta


class UnsplashSession(CachedSession, metaclass=SingletonMeta):
    def __init__(self):
        super().__init__(cache_name='unsplash_cache', backend='sqlite', expire_after=3600)
        self.headers.update({'Authorization': f'Client-ID {os.getenv("UNSPLASH_ACCESS_KEY")}'})
