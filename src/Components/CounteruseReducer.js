import React, { useReducer } from 'react';

const initialstate=0
const reducer=(state,action)=>{
    switch(action){
        case 'Increment':
            return state+1
        case 'Decrement':
            return state-1
        case 'Reset':
            return initialstate
        default:
            return state
    }
}

function CounteruseReducer(){
    const[count,dispatch]=useReducer(reducer,initialstate)
    return(
        <div>
            <h1>CounteruseReducer</h1>
            <h2>Count : {count}</h2>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
        </div>
    )
}

export default CounteruseReducer