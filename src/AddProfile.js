import React, { useState, useEffect } from "react";
import classes from "./AddProfile.module.css";
// import  "./AddProfile.module.css";
const AddProfile = ({ edit, addData, editData, editItem,children }) => {
  const [title, setTitle] = useState(editItem?.title || "");
  const [author, setAuthor] = useState(editItem?.author || "");
  useEffect(() => {
    setTitle(editItem?.title || "");
    setAuthor(editItem?.author || "");
  }, [editItem]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (edit) {
      editData(title, author);
    } else {
      addData(title, author);
    }
    setAuthor("");
    setTitle("");
  };
  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const onAuthorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.container}>
        <div className={classes.header}> {edit ? "Edit" : "Add"} Profile</div>
        <div className={classes.content}>
          <label htmlFor="title">Title</label>
          <input id="title" value={title} onChange={onTitleChangeHandler} />
          <label htmlFor="author">Author</label>
          <textarea
            id="author"
            className={classes.author}
            value={author}
            onChange={onAuthorChangeHandler}
          />
          <button>{edit ? "Edit" : "Add new"} Post</button>
          {/* {children} */}
        </div>
      </div>
    </form>
  );
};

export default AddProfile;
