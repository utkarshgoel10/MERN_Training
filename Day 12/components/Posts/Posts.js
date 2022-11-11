import React from "react";
import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  return (
    <div>
      <div className="posts-div" id="pg">
        <h2>Latest Updates</h2>
        <div className="cards-div">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Posts;
