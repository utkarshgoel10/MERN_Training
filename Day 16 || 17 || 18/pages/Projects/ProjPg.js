import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IMG from "../../assets/ml.jpg";
import IMG2 from "../../assets/ds.jpg";
import IMG3 from "../../assets/netflix.jpg";
const ProjPg = () => {
  const { id } = useParams();
  const [state, setState] = useState(null);

  useEffect(() => {
    let state = data.find((state) => state.id === parseInt(id));
    if (state) {
      setState(state);
    }
  }, []);
  const data = [
    {
      id: 1,
      title: "ICMS",
      img: IMG
        
    },
    {
      id: 2,
      title: "Sorting Visualizer",
      img: IMG2
    },  
    {
      id: 3,
      title: "Netflix Clone",
      img: IMG3
    },  
  ];
  return (
    <div>
      {state ? (
        <div className="container">
        <img src={state.img} alt="" />
          <h2>{state.title}</h2>
        </div>
      ) : (
        <div><h1>Error Mess</h1></div>
      )}
    </div>
  );
};

export default ProjPg;
