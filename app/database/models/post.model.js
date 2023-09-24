// models/PostModel.js
import Realm from 'realm';

class PostModel extends Realm.Object {}
PostModel.schema = {
  name: 'Post',
  properties: {
    id: 'int',
    title: 'string',
    content: 'string',
    author: 'string',
    date_create: 'string',
    image_post: "string"
  },
};

export default PostModel;
