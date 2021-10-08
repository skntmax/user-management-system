import axios from 'axios'
import React ,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
 

export default function Home() {
 
 var [users , setUsers] = useState([
    {   id: "" ,
      email : " " ,
       first_name: " " , 
       last_name : " " , 
       avatar: " " ,  
     }]) 

const {  id ,email , first_name  ,  last_name  , avatar } = users; 

 useEffect( ()=>{
  readdata();
 },[] )
 
 const readdata = async()=>{
 
  var res= await axios.get("https://reqres.in/api/users?page=2" ) ; 
  console.log(res.data.data)
   setUsers( res.data.data  )
   console.log(users)

  } 
  
  
  function  dltUser(id){
 alert(" can't delete , restricted by server  ")    
  
}

    return (
        
        <div>
             

              <Navbar />
              <div className="conatainer"> 
              <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
     users.map((ele , index)=>{ 
      
     return (
          <>
      <tr key ={index}>
       
      <th scope="row">{ ele.id}</th>
      <td>{ele.email}</td>
      <td>{ele.first_name} </td>
      <td>{ele.last_name}</td>
      <td> <img src=  {ele.avatar} /></td>
      <td> <Link className="btn btn-primary "  value="view" to={"/users/"+ele.id}> View </Link>  <Link className="btn btn-success "  value="view" to={"api/users/"+ele.id}> Edit </Link> <Link className="btn btn-danger"  value="view" onClick ={ e=> dltUser(ele.id)}>Delete </Link> </td>

    </tr>
        </>
     )   
        
     })   
    }   
   
  </tbody>
</table>
<div class="d-flex justify-content-center mb-3">
<Link className="btn btn-outline-primary"  to="/api/users/page2">Page 2</Link>
</div>
 </div>
        </div>
    )
}
