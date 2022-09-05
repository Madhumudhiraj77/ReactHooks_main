import React, { useEffect, useState } from 'react';

function HookuseEffectCount(){
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')

    useEffect(()=>{
        document.title=`you clicked ${count} times`
        console.log("useEffect render")
    },[count])

    return(
        <div>
            <input type="text" value={name} onChange={event=>setName(event.target.value)}/>
            <button onClick={()=>setCount(count+1)}>You clicked {count}</button>
        </div>
    )
}

export default HookuseEffectCount