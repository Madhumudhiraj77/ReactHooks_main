import React, { useEffect, useState } from "react"
import axios from "axios"

function Fetchingusereducer1(){

    const[loading,setLoading] = useState(true)
    const[post,setPost] = useState({})
    const[error,setError] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            console.log(response.data)
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error=>{
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    },[])

    return(
        <div>
            {loading ? 'Loading' : post.title }
            {error ? error : ''}
        </div>
    )
}

export default Fetchingusereducer1