// Page bnana hai : =======
// Heading
// Image
// 3 - cards
import Img from './Img'
import Card from './Card'
import './App.css'
function App() {
  return (
    <div className="App">
      <h1 style={{color: "darkBlue",textAlign: "center"}}>My page</h1>
      <Img />
      <div className='box'>
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
}

export default App;
