
import realm from './models/real.config';
import PostModel from './models/post.model';

class PostService {
  static insertPost(title, content, author, date_create, image_post) {
    realm.write(() => {
      const id = new Date().getTime(); // Genera un ID único
      realm.create('Post', {
        id,
        title,
        content,
        author,
        date_create,
        image_post
      });
    });
  }

  static getAllPosts() {
    return realm.objects('Post');
  }
  
  static deleteAllPosts() {
    realm.write(() => {
      const allPosts = realm.objects('Post');
      realm.delete(allPosts);
    });
  }
}

export default PostService;
