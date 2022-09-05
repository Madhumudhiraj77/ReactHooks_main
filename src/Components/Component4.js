import React, { useContext } from "react";
import {AddContext} from "../App"

function Component4(){
    const countContext=useContext(AddContext)
    return(
        <div>
            Component4 - {countContext.countState}
            <button onClick={()=>countContext.countdispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countdispatch('reset')}>Reset</button>
            <button onClick={()=>countContext.countdispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default Component4