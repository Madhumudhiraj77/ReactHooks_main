import React, { useReducer } from "react";

const initialState={firstCounter:0}

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {firstCounter:state.firstCounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounteruseReducerobject(){
    const[count,dispatch]=useReducer(reducer,initialState)
    const[count2,dispatch2]=useReducer(reducer,initialState)
    return(
        <center>
            <h1>Counter useReducer with object</h1>
            <h2>Count : {count.firstCounter}</h2>
            <h2>Count 2 : {count2.firstCounter}</h2>
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment by 5</button>
            <button onClick={()=>dispatch2({type:'increment',value:6})}>Increment</button>
            <button onClick={()=>dispatch2({type:'decrement',value:6})}>Decrement</button>
        </center>
    )
}

export default CounteruseReducerobject