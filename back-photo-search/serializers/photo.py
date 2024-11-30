from marshmallow import Schema
from marshmallow import fields

from services.unsplash_service import get_tags_by_photo_id


class PhotoSchema(Schema):
    id = fields.Str()
    url = fields.Str(attribute='urls.full')
    author = fields.Str(attribute='user.name')
    created_at = fields.Str()
    tags = fields.Method('get_tags')

    def get_tags(self, obj):
        id = obj['id']
        return get_tags_by_photo_id(id)
