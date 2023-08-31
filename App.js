import { useState } from "react";
function App() {
  const [result,setResult] = useState(0)
  const [inputValue1,setInputValue1] = useState(0)
  const [inputValue2,setInputValue2] = useState(0)


  function minus (){
    
  }

  return (
    <div className="App">
      <input type="text" onChange={(event)=>setInputValue1(+event.target.value)} />
      <input type="text" onChange={(event)=>setInputValue2(+event.target.value)}  />
      <button onClick={()=>{setResult( inputValue1-inputValue2 )}}>-</button>
      <button onClick={()=>{setResult( inputValue1+inputValue2 )}}>+</button>  
      <button onClick={()=>{setResult( inputValue1*inputValue2 )}}>*</button>
      <button onClick={()=>{setResult( inputValue1/inputValue2 )}}>/</button>
      <button onClick={()=>{setResult( inputValue1**inputValue2 )}}>**</button>
      <button onClick={()=>{setResult(Math.sqrt( result))}}>%</button>
      <h1> {result} </h1>
    </div>
  );
}

export default App;
