import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Eg04() {
    const[post,setPost] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((postRes)=>{
            setPost(postRes.data)
        }).catch((error)=>{
            console.log(error);
        })
    },[])

  return (
    <div>
        <table className="table table-bordered table-warning w-50 mx-auto table-striped table-hover text-primary">
                <thead>
                    <tr >
                        <th>Sr no</th>
                        <th>UserID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.map((e, i) => (
                            <tr>
                                <td className="text-primary">{i + 1} </td>
                                <td className="text-danger"> {e.userId} </td>
                                <td className="text-info">{e.title} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

    </div>
  )
}

export default Eg04