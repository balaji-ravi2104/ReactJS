import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Eg05() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [nid, setNid] = useState(1)
    const fetchData = () => {
        setPost([])
        setNid(id)
    }
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((posRes) => {
                setPost(posRes.data)
            }, (errRes) => {
                console.log(errRes)
            })
    },[nid])

  return (
    <div>
        <input type='number' 
                placeholder="Enter id"
                onChange={e=>setId(e.target.value)}></input>
            <button onClick={fetchData}>Fetch</button>
        <p>{JSON.stringify(post)}</p>
    </div>
  )
}

export default Eg05