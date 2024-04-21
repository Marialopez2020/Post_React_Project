import Post from './Post';
import styles from './PostList.module.css';
function PostList() {
  return (
    <ul className={styles.posts}>
      <Post author="Maria" body="React.js is Awesome!" />
      <Post author="Missie" body="Java is Awesome!" />
    </ul>
  );
}

export default PostList;
