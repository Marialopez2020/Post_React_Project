import styles from './NewPost.module.css';
function NewPost() {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
      </p>

    </form>
  );
}

export default NewPost;