import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import myBlogs from "../blogData/blogData";
import { blogType } from "../Home/Home";

const Blogs = ({blogs}: {blogs: blogType[]}) => {

  return (
    <div className="container">
      <div className="row">
        {
          blogs.map(blog => <Blog blog={blog} key={blog.id} />)
        }
      </div>
    </div>
  );
};

export default Blogs;
