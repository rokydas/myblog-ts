import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import myBlogs from "../blogData/blogData";
import Blogs from "../Blogs/Blogs";
import InsertBlog from "../InsertBlog/InsertBlog";
import './Home.css';

export interface blogType {
  id: number;
  title: string;
  description: string;
  author: string;
}

const Home = () => { 

  const [blogs, setBlogs] = useState<blogType[]>(myBlogs);

  console.log(blogs);

  const insertBlog = (blog: blogType) => {
    const newBlog = {...blog};
    newBlog.id = blogs.length + 1;
    setBlogs([...blogs, newBlog]);
  }

  return (
    <div>
      <h1 className="text-center mt-3 mb-5">Welcome to myBlog</h1>
      <InsertBlog insertBlog={insertBlog} />
      <h3 className="text-center m-3">Our Blogs</h3>
      <Blogs blogs={blogs} />
    </div>
  );
};

export default Home;
