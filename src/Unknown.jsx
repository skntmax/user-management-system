import React ,{ useState , useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default function Unknown() {
    var [uk , setUk] = useState([
        {   id : "" ,
          name : " " ,
           year : " " , 
           color : " " , 
           pantone_value : " " ,  
         }]) 
    
    const {  id ,name , year  ,  color  , pantone_value } = uk; 
    
     useEffect( ()=>{
      ukdata();
     },[] )
     
     const ukdata= async()=>{
      var res= await axios.get("https://reqres.in/api/unknown/ " ) ; 
      console.log(res.data.data)
       setUk( res.data.data  )
       console.log(uk)
    
      }  

    return (

        <div>
              <Navbar />
              <div className="conatainer"> 
              <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Year</th>
      <th scope="col">Color</th>
      <th scope="col">Pantone Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
     uk.map((ele , index)=>{ 
      
     return (
          <>
      <tr key ={index}>
       
      <th scope="row">{ ele.id}</th>
      <td>{ele.name}</td>
      <td>{ele.year} </td>
      <td>{ele.color}</td>
      <td> {ele.pantone_value} </ td>
      <td> <Link to={`/api/unknown/${ele.id}`} className="btn btn-primary"> View </Link> </ td>

    </tr>
        </>
     )   
        
     })   
    }   
   
  </tbody>
</table>

 </div>
   
        </div>
    ) 


}

    
