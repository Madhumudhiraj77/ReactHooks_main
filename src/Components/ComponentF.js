import React, { useContext } from "react";
import {userContext,learningContext} from "../App"

const ComponentF = () => {

  const user=useContext(userContext)
  const learning=useContext(learningContext)

  return(
  <div>
   {user}-{learning}
  </div>
  )
};

export default ComponentF;
