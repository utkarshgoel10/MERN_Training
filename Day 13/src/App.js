import React,{useEffect, useState} from 'react'
import Data from './Data'

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  useEffect(()=>{
    alert('Woah simple bruh')
  },[counter])
  // const [count, setCount] = useState(0)

  // function dec(){
  //   setCount(count-1)
  // }  

  // function inc(){
  //   setCount(count+1)
  // }

  return (
    <div className="App">
    {/* Props */}
      {/* <Data name='Abhay' roll='100' bio='lorem ipsum'/>
      <br />
      <Data name='Abhay2' roll='101' bio='lorem ipsum2'/>
      <br />
      <Data name='Abhay3' roll='102' bio='lorem ipsum3'/> */}
{/* useState */}
{/* 
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button> */}

      {/* Hooks: useState, useEffect, useContext, useRef, useMemo */}
      {/* Hooks rules:
        1. Hooks: import 
        2. Hooks can be used only inside the functional components
        3. Hooks need to be defined only at the top of the function.
        4. Hooks cannot be used inside any other block.
       */}

       {/* useState */}

       {/* useEffect */}
       <button onClick={()=> setCounter(counter+1)}>Clicked {counter} times</button>
       <br />
       <button onClick={()=> setCounter2(counter2+1)}>Clicked {counter2} times</button>

    </div>
  );
}

export default App;
