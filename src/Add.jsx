import React ,{useState, useEffect } from 'react'
import {useParams , useHistory } from 'react-router-dom'
import Navbar from './Navbar';
import {Link , Redirect} from 'react-router-dom'
import axios from 'axios';

import './Add.css'  
const   Add = ()=> {
    const  [newUser, setNewUser] = useState({
        name : " " ,
         job: " " ,
         id: Math.random() 
      })
      
  
      async function addUser (e){
         e.preventDefault()
         const current_data = newUser.createdAt = new Date().toString()  
         const res= await axios.post('https://reqres.in/api/users',current_data )   
         console.log(newUser)
         if(res){
      alert(  `{  id: ${ newUser.id} \n\n  name:${ newUser.name} \n\n Job Title :${ newUser.job} \n\n  created at: ${ newUser.createdat}    } \n\n\ saved` )
        
              }
         else
         console.log("not inserted ")

          

      }

      function userchangeinp(e){
        console.log(newUser)
        setNewUser({...newUser, [e.target.name]:e.target.value , id: Math.random() } )
        console.log(newUser)
      }

    return (
        <>
  <Navbar />
  <div class="main_container">  
 <div>
  <form onSubmit={addUser}>
  <div class="form-outline mb-4">
    <input type="text" name="name" value={newUser.name}  onChange={ e =>userchangeinp(e) } id="form1Example1" className="form-control" />
    <label class="form-label" for="form1Example1">E Name</label>
  </div>

  <div class="form-outline mb-4">
    <input type="text" name="job" value={newUser.job}    onChange={ e =>userchangeinp(e) } id="form1Example2"  className="form-control"  />
    <label class="form-label" for="form1Example2">E Job</label>
  </div>

  

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="form1Example3"
          checked
        />
        <label class="form-check-label" for="form1Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>
</div>
</div>
        </>
    ); 
}


export default Add