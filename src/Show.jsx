import React ,{useState, useEffect } from 'react'
import {useParams , useHistory } from 'react-router-dom'
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import axios from 'axios';
export default function Show() {
    let history = useHistory();
    const {user_id} = useParams(); 
    const  [singleu, setSingleu] = useState([{
    id: user_id ,
    email : " " ,
     first_name: " " , 
     Last_name : " " , 
     avatar: " " ,
     support: "" 
  }])
  const {  id ,email , first_name  ,  Last_name  , avatar , support } = singleu; 
     
   useEffect( ()=>{
    singleuser ()
     } , [])

     const singleuser = async ()=>{
        let res= await axios.get(`https://reqres.in/api/users/${user_id}` )
        console.log(res.data.data)
        await setSingleu([res.data.data])
        console.log(singleu)
     } 

    return (
        <>
     

        <Navbar/>
        <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><span style={ { color: "blue" } }></span><img src={singleu[0].avatar} /></li>

    <li class="list-group-item"><span style={ { color: "blue" } }>First Name  </span>{singleu[0].first_name}</li>
    <li class="list-group-item"><span style={ { color: "blue" } }>Last name </span>{singleu[0].last_name}</li>
    <li class="list-group-item"><span style={ { color: "blue" } }>Email  </span>{singleu[0].email}</li>
  </ul>
    <Link  className="btn btn-primary" to="/" >Go back </Link>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>

        </>
    )
}
