import logging
from concurrent.futures import ThreadPoolExecutor
from typing import List

from marshmallow import Schema

from constants import MAX_THREADS

logger = logging.getLogger(__name__)


def serialize_in_paralell(elements: List[dict], schema: Schema) -> List[dict]:
    results = []
    with ThreadPoolExecutor(MAX_THREADS) as executor:
        futures = [executor.submit(schema.dump, element) for element in elements]
        for future in futures:
            try:
                result = future.result()
                results.append(result)
            except Exception as e:
                logger.error(f'Failed to serialize element: {e}')
    return results
