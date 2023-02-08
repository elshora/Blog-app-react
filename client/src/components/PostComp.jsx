import React from "react";
import "./post.scss";
export default function PostComp({ post }) {
  const time = new Date(post.createdAt).getUTCFullYear();
  return (
    <div className="row post-item my-3 border border-light py-3">
      <div className="col-12 col-md-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
          className="float-end post-img"
          alt="thumbnail"
        />
      </div>
      <div className="body col-12 col-md-6">
        <h4 className="text-capitalize dispaly-1">{post.title}</h4>
        <span className="text-muted">{post.username} </span>
        <span className="text-muted">{time}</span>
        <p className="my-3 fs-5 desc">{post.desc}</p>
      </div>
    </div>
  );
}
