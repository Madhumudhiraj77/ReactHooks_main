import React, { useEffect, useState } from "react";

function PracticeAll(){
  const initialcount=0
  const[num,setNum]=useState(initialcount)
  const[name,setName]=useState({firstname:'',lastname:''})
  const[arr,setArr]=useState([])

  const decrement=()=>{
    setNum(prevState=>prevState-1)
  }

  const lastnameFun=(event)=>{
    setName({...name,lastname:event.target.value})
  }

  const generateNumber=()=>{setArr(
    [...arr,{
      id:arr.length,
      val:Math.floor(Math.random()*10)+1
    }])
  }

  useEffect(()=>{
    console.log("useEffect updating component")
    document.title=`you clicked ${num} times`

    return()=>{
      console.log("retun cleanup")
    }
  },[num])

  return(
    <div>
      <h1>Counter</h1>
      <h2>Count {num}</h2>
      <button onClick={()=>setNum(prevState=>prevState+1)}>Increment</button>
      <button onClick={()=>setNum(initialcount)}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>setNum(prevState=>prevState+5)}>Increment by 5</button>
      <h1>Objects</h1>
      <input type="text" value={name.firstname} onChange={(event)=>setName({...name,firstname:event.target.value})}/>
      <input type="text" value={name.lastname} onChange={lastnameFun}/>
      <h3>My first name is - {name.firstname}</h3>
      <h3>My last name is - {name.lastname}</h3>
      <h4>{JSON.stringify(name)}</h4>
      <h1>Arrays</h1>
      <button onClick={generateNumber}>Click to add number in list</button>
      <ul>
        {arr.map(each=><li key={each.id}>keyvalue:{each.id} - Randomvalue:{each.val}</li>)}
      </ul>
      <h1>UseEffects</h1>
    </div>
  )
}

export default PracticeAll