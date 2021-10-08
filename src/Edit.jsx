import React,{useEffect , useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
export default function Edit() {
    const  [newUser, setNewUser] = useState({
        name : " " ,
         job: " " ,
         id: Math.random() 
      })
      
  
      async function editUser (e){
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
   <h1 className="text-center">Update</h1>

  <form onSubmit={editUser}>

  <div class="form-outline mb-4">
    <input type="text" name="name" value={newUser.name}  onChange={ e =>userchangeinp(e) } id="form1Example1" className="form-control" />
    <label class="form-label" for="form1Example1">E Name</label>
  </div>

  <div class="form-outline mb-4">
    <input type="text" name="job" value={newUser.job}    onChange={ e =>userchangeinp(e) } id="form1Example2"  className="form-control"  />
    <label class="form-label" for="form1Example2">E Job</label>
  </div>


  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>
</div>
</div>
        </>
    ); 
}
