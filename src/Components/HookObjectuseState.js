import React, { useState } from "react";

function HookObjectuseState(){
    const[name,setName]=useState({firstname:'',lastname:''})

    const valueChange=(event)=>{
        setName({...name,lastname:event.target.value})
    }

    return(
        <form>
            <input type="text" value={name.firstname} onChange={event=>setName({...name,firstname:event.target.value})}/>
            <input type="text" value={name.lastname} onChange={valueChange}/>
            <h2>My firstname is - {name.firstname}</h2>
            <h2>My lastname is - {name.lastname}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    )
}

export default HookObjectuseState