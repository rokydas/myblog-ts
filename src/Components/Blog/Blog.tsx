import React from "react";
import { blogType } from "../Home/Home";

const Blog = ({ blog }: { blog: blogType }) => {
  const { title, description, author, id } = blog;

  return (
    <div className="col-md-4">
      <div className="p-5 shadow rounded mb-4">
        
        <h3>{title}</h3>
        <h4>Author: {author}</h4>
        <h5>Id: {id}</h5>
        <p>{description}</p>
        <button className="btn btn-info me-3">Update</button>
        <button className="btn btn-danger">Delete</button>
        
      </div>
    </div>
  );
};

export default Blog;
