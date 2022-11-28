import "./App.css";
import { incNumber } from "./action/index";
import { decNumber } from "./action/index";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const changeTheNumber = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="main-div">
        <div className="container">
          <h1>Increament/Decreament Counter</h1>
          <h4>using React-Redux</h4>
          <div className="box">
            <button className="box__minus" title="decreament"
            onClick={()=> dispatch(decNumber())}
            >
              <span>-</span>
            </button>
            <input type="text" name="box" className="box__input" value={changeTheNumber} />
            <button className="box__plus" title="increament"
            onClick={()=> dispatch(incNumber(50))}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
