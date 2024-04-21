import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostList.module.css";
function PostList() {
  return (
    <>
     <NewPost />
      <ul className={styles.posts}>
        <Post author="Maria" body="React.js is Awesome!" />
        <Post author="Missie" body="Java is Awesome!" />
      </ul>
    </>
  );
}

export default PostList;
