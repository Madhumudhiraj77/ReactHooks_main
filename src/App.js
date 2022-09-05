import React, { useReducer } from "react";
import ClassCounter from "./Components/ClassCounter";
import HookCounter from "./Components/HookCounter";
import PracticeAll from "./Components/PracticeAll";
import HookObjectuseState from "./Components/HookObjectuseState";
import HookArrayuseState from "./Components/HookArrayuseState";
import UseStateAll from "./Components/UseStateAll";
import Classunmount from "./Components/Classunmount";
import HookuseEffectCount from "./Components/HookuseEffectCount";
import DatafetchinguseEffect from "./Components/DatafetchinguseEffect"
import Pra1 from "./Components/Pra1";
import ComponentC from "./Components/ComponentC";
import CounteruseReducer from "./Components/CounteruseReducer";
import CounteruseReducerobject from "./Components/CounteruseReducerobject";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Fetchingusereducer1 from "./Components/Fetchingusereducer1";

export const userContext=React.createContext()
export const learningContext=React.createContext()

export const AddContext=React.createContext()

// const initialState=0;
// const reducer=(state,action)=>{
//   switch(action){
//     case 'increment':
//       return state+1
//     case 'decrement':
//       return state-1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const[countvalue,dispatch]=useReducer(reducer,initialState)
  return (
    <center>
      <Fetchingusereducer1/>

      {/* <AddContext.Provider value={{countState:countvalue,countdispatch:dispatch}}>
        <h1>Count is shared all components</h1>
      <h1>countvalue : {countvalue}</h1>
      <Component1/>
      <Component2/>
      <Component3/>
      </AddContext.Provider> */}
      {/* <CounteruseReducerobject/> */}
      {/* <CounteruseReducer/> */}
      {/* <userContext.Provider value={'Madhu'}>
        <learningContext.Provider value={'SE'}>
          <ComponentC/>
        </learningContext.Provider>
       </userContext.Provider> */}
      {/* <Pra1/> */}
      {/* <DatafetchinguseEffect/> */}
      {/* <PracticeAll /> */}
      {/* <ClassCounter />
      <HookCounter />
      <h1>Practice</h1>
      <PracticeAll />
      <h1>HookObjectuseState</h1>
      <HookObjectuseState/>
      <h1>HookArraytuseState</h1>
      <HookArrayuseState/>
      <h1>UseStateAll</h1>
      <UseStateAll/>
      <h1>Classunmount Example using class</h1>
      <Classunmount/> 
      <h1>UseEffect count title</h1>
      <HookuseEffectCount/>*/}
    </center>
  );
}

export default App;
