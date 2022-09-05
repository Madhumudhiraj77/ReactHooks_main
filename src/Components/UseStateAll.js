import React, { useState } from "react";

function UseStateAll(){

    const initialcount=0
    const[num,setnum]=useState(initialcount)
    const[name,setname]=useState({firstname:'',lastname:''})
    const[value,setValue]=useState([])

    const decrement=()=>{
        setnum(prevState=>prevState-1)
    }

    const lastnameChange=(event)=>{
        setname({...name,lastname:event.target.value})
    }

    const addingNumber=()=>{
        setValue([...value,{
            id:value.length,
            val:Math.floor(Math.random()*10)+1
        }])
    }

    return(
        <div>
            <h1>Count {num}</h1>
            <button onClick={()=>{setnum(prevState=>prevState+1)}}>Increment Number</button>
            <button onClick={()=>{setnum(initialcount)}}>Reset Number</button>
            <button onClick={decrement}>Decrement Number</button>
            <button onClick={()=>{setnum(prevState=>prevState+5)}}>Increment Number By 5</button>
            <h1>Objects in usestate</h1>
            <input type="text" value={name.firstname} onChange={(event)=>{setname({...name,firstname:event.target.value})}}/>
            <input type="text" value={name.lastname} onChange={lastnameChange}/>
            <h3>My first name - {name.firstname}</h3>
            <h3>My last name - {name.lastname}</h3>
            <h2>{JSON.stringify(name)}</h2>
            <h1>Arrays in usestate</h1>
            <button onClick={addingNumber}>click to add Number</button>
            <ul>
                {value.map(each=>(
                    <li key={each.id}>valuelength:{each.id} - randomvalue:{each.val}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseStateAll