import React, { useEffect, useState } from "react";
import axios from "axios";

function Pra1(){
    const initialvalue=0
    const[num,setnum]=useState(initialvalue)
    const[name,setname]=useState({firstname:'',lastname:''})
    const[val,setval]=useState([])
    const[post,setposts]=useState([])
    const[idd,setId]=useState(1)
    const[fetchpost,setfetchpost]=useState(1)

    const incrementfive=()=>{
        setnum(prevState=>prevState+5)
    }

    const lastnamefunc=(event)=>{
        setname({...name,lastname:event.target.value})
    }

    const generateRandom=()=>{
        setval([...val,{
            id:val.length,
            result:Math.floor(Math.random()*10)+1
        }])
    }

    const datafetching=()=>{
        setfetchpost(idd)
    }

    useEffect(()=>{
        console.log("useEffect re-render")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchpost}`)
        .then(res=>{
            console.log(res)
            setposts(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[fetchpost])

    return(
        <div>
            <h1>Counter using useState</h1>
            <h2>count : {num}</h2>
            <button onClick={()=>{setnum(prevState=>prevState+1)}}>Increment</button>
            <button onClick={()=>{setnum(initialvalue)}}>Reset</button>
            <button onClick={()=>{setnum(prevState=>prevState-1)}}>Decrement</button>
            <button onClick={incrementfive}>Increment by 5</button>
            <h1>Objects using useState</h1>
            <input type="text" value={name.firstname} onChange={event=>setname({...name,firstname:event.target.value})}/>
            <input type="text" value={name.lastname} onChange={lastnamefunc}/>
            <h3>My first name is : {name.firstname}</h3>
            <h3>My last name is : {name.lastname}</h3>
            <h4>{JSON.stringify(name)}</h4>
            <h1>Arrays using useState</h1>
            <button onClick={generateRandom}>Click to Generate random number</button>
            <ul>
                {val.map(each=><li key={each.id}> key : {each.id} - randomnumber : {each.result}</li>)}
            </ul>
            <h1>UseEffect Data fetching</h1>
            <input type="text" value={idd} onChange={(event)=>setId(event.target.value)}/>
            <button onClick={datafetching}>Fetch post</button>
            {/* <ul>
                {post.map(each=><li key={each.id}>{each.title}</li>)}
            </ul> */}
            <h2>{post.title}</h2>
        </div>
    )
}

export default Pra1