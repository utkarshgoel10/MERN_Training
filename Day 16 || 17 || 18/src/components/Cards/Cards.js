import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import { data } from "./data";

const Cards = () => {
  return (
    <div>
      <div className="box-grid">
        {data.map(({ id, img, title }) => {
          return (
            <Link to={`/projects/${id}`} key={id}>
              <div className="box">
                <img src={img} alt="" />
                <p>{title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
