import React,{useState,useEffect, useRef} from 'react'
import '../styles/App.css';
const App = () => {
//code here
  const inp1 = useRef();
  const [text,setText] = useState('');
  const clickHandler = ()=> {
    setText(inp1.current.value);
  }
  return (
    <div id="main">
      <input id='input' ref={inp1}></input>
      <button id='button' onClick={clickHandler}>Click</button>
      <p id='text'> Hello my name is {text?text:'__'} and I study at Newton School</p>
    </div>
  )
}


export default App;
