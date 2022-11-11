import React from "react";
import Button from "../Button/Button";
import "./Post.css";
const Post = () => {
  return (
    <div>
      <div>
        <a href="/" class="card">
          <div
            class="thumb"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1642388691919-231d16e51e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80)",
            }}
          ></div>
          <article>
            <h1>Created by us, For you</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus ipsa exercitationem unde voluptate hic vero quasi vel
              voluptatem dicta in!!{" "}
            </p>
            <span>Melody Nieves</span>
            <Button />
          </article>
        </a>
      </div>
    </div>
  );
};

export default Post;
