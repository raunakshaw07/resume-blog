import React from "react";

const ShowBlog = ({ blog, setOpen, isAuthenticated }) => {
  return (
    <div className="show-blog">
      <div className="inner">
        <div className="header">
          <h1 onClick={() => setOpen(false)}>
            <i className="fas fa-times"></i>
          </h1>
        </div>
        <h1>{blog.title}</h1>
        {isAuthenticated ? null : <p>Edit</p>}
        <div
          className="image"
          style={{
            background: `url(${blog.imgUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <p>{blog.body}</p>
      </div>
    </div>
  );
};

export default ShowBlog;
