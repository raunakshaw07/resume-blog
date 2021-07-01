import React, { useState } from "react";
import "../blog.css";
import ShowBlog from "./ShowBlog";
import Modal from "../helpers/Modal";

const Blog = ({ blog, truncate, isAuthenticated }) => {
  const [open, setOpen] = useState(false);
  const [displayBlog, setDisplayBlog] = useState(null);
  return (
    <div className="blog-component">
      <div className="inner">
        <h1>Latest</h1>
        <div
          className="latest"
          style={{ backgroundImage: `url(${blog[0].imgUrl})` }}
        >
          <div className="content">
            <h3>{blog[0].title}</h3>
            <p>{truncate(blog[0].body, 40)}</p>
            <button
              onClick={() => {
                setDisplayBlog(blog[0]);
                setOpen(true);
              }}
            >
              Read
            </button>
          </div>
          <div className="overlay"></div>
        </div>

        {/* All blogs */}
        <h1>All Blog</h1>
        <div className="all">
          {blog.map((bl) => (
            <div className="blog-card" key={bl.id}>
              <div
                className="image"
                style={{
                  background: `url(${bl.imgUrl})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="content">
                <h3>{bl.title}</h3>
                <p>{truncate(bl.body, 40)}</p>
                <button
                  onClick={() => {
                    setDisplayBlog(bl);
                    setOpen(true);
                  }}
                >
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal open={open}>
        <ShowBlog
          blog={displayBlog}
          setOpen={setOpen}
          isAuthenticated={isAuthenticated}
        />
      </Modal>
    </div>
  );
};

export default Blog;
