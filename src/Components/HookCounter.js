import React, { useState } from "react";

function HookCounter() {
  const intialState = 0;
  const [count, setCount] = useState(intialState);

  // const IncrementFive=()=>{
  //     for (let i=0;i<5;i++){
  //         // setCount(count+1)
  //         setCount(prevState=>prevState+1)
  //     }
  // }

  return (
    <div>
      <h1>hookCount {count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Hook Increment
      </button>
      <button onClick={() => setCount(intialState)}>Hook Reset</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Hook Decrement
      </button>
      <button onClick={() => setCount((prevState) => prevState + 5)}>
        Hook Increment by 5
      </button>
    </div>
  );
}

export default HookCounter;
