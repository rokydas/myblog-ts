import React, { useRef, useState } from "react";
import { blogType } from "../Home/Home";

const InsertBlog = ({insertBlog}: {insertBlog: (blog: blogType) => void}) => {

  const [newBlog, setNewBlog] = useState<blogType>({} as blogType);

  const changeBlogInfo = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const createBlog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(newBlog.title && newBlog.description && newBlog.author) {
      insertBlog(newBlog);
      setNewBlog({title: '', description: '', author: ''} as blogType);
    }
    else {
      alert('Please fill up the all fields.');
    }
    
  };

  console.log(newBlog);

  return (
    <div className="d-flex justify-content-center m-3">
      <form className="text-center insert-form" onSubmit={createBlog}>
        <input value={newBlog.title} onChange={changeBlogInfo} type="text" name="title" placeholder="Enter a title" /> <br />
        <textarea value={newBlog.description} onChange={changeBlogInfo} id="" cols={50} rows={5} name="description" placeholder="Enter your blog description" /> <br />
        <input value={newBlog.author} onChange={changeBlogInfo} type="text" name="author" id="" placeholder="Enter your name" /> <br />
        <button className="btn btn-success">Create a blog</button>
      </form>
    </div>
  );
};

export default InsertBlog;
