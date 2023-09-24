
import Realm from 'realm';
import PostModel from './post.model';
const realm = new Realm({
  schema: [PostModel],
  schemaVersion: 1, // Incrementa esto si haces cambios en el esquema de datos
});

export default realm;
