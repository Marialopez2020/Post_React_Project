import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostList.module.css";
function PostList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
function bodyChangeHandler(event){
  setEnteredBody(event.target.value);
}
function authorChangeHandler(event){
  setEnteredAuthor(event.target.value);
}

  return (
    <>
     <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      <ul className={styles.posts}>
        <Post author={enteredAuthor}body={enteredBody} />
        <Post author='Lorem' body='Lorem' />
      </ul>
    </>
  );
}

export default PostList;
