import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="head-hero">
          <h1 className="">Get regular NFT updates</h1>
          <Button />
        </div>
        <img
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
