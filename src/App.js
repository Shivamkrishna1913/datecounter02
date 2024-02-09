import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function handleReset(){
    setStep(1);
    setCount(0);
  }
  const date = new Date("Feb 8 2024");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div> 
    <input type="range" min="0" max="10" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
        <span>Step: {Math.abs(step)}</span> 
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="text" value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
  {(count!==0 || step!==1)?<div>
   <button onClick={handleReset}>Reset</button>
  </div>:null}
    </>
  );
}

export default App;
