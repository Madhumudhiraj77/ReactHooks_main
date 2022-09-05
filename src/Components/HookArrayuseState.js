import React, { useState } from "react";

function HookArraytuseState(){
    const[num,setnum]=useState([])

    const NumberAdding=()=>{
        setnum([...num,{
            id:num.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }

    return(
        <div>
            <button onClick={NumberAdding}>Add a number</button>
            <ul>
                {num.map(each=>(
                    <li key={each.id}>{each.id}={each.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookArraytuseState