import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Posts />
      <h5 style={{ textAlign: "center", marginBottom: "5px" }}>
        Contributed by <span>UG</span>
      </h5>
    </div>
  );
}

export default App;
