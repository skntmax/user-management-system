import React ,{ useState , useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import {Link , useParams} from 'react-router-dom'


export default function UnknownView() {
    let {uId} = useParams()
    const  [uk, setUk] = useState([{
        id : "" ,
          name : " " ,
           year : " " , 
           color : " " , 
           pantone_value : " " , 
      }])
      const {  id ,name , year  ,  color  , pantone_value  } = uk; 
         
       useEffect( ()=>{
        singleuser ()
         } , [])
    
         const singleuser = async ()=>{
            let res= await axios.get(`https://reqres.in/api/unknown/${uId}` )
            console.log(res.data.data)
            await setUk( res.data.data)
            console.log(uk)
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
        <li class="list-group-item"><span style={ { color: "blue" } }>ID </span>{uk.id} </li>
        <li class="list-group-item"><span style={ { color: "blue" } }>Name  </span>{uk.name}</li>
        <li class="list-group-item"><span style={ { color: "blue" } }>Color </span>{uk.color}</li>
        <li class="list-group-item"><span style={ { color: "blue" } }>Pantone  </span>{uk.pantone_value}</li>
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
