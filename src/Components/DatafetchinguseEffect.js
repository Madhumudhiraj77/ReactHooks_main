import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function DatafetchinguseEffect(){
    // const[post,setposts]=useState([])
    const[post,setposts]=useState({})
    const[id,setId]=useState(1)
    const[fetchpost,setfetchpost]=useState(1)

    const fetchingvalue=()=>{
        setfetchpost(id)
    }

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=>{
    //         console.log(res)
    //         setposts(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])

    useEffect(()=>{
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
            {/* <ul>
                {post.map(each=><li key={each.id}>{each.title}</li>)}
            </ul> */}

            <input type="text" value={id} onChange={event=>setId(event.target.value)}/>
            <button onClick={fetchingvalue}>Fetch post</button>
            <h2>{post.title}</h2>
        </div>
    )
}

export default DatafetchinguseEffect