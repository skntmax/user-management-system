import React , {useState} from 'react'
 
const Navbar = (props)=>{
  const [val, setVal] = useState('') 
   const search =(e)=> {
    if(val!=''){
      setVal(e.target.value)
      props.get_user_inp(val);
      setVal('')
    return    
    }
    alert("please enter something ")
   }    

  

    return (
        <>
     
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">YouTube <i className="fab fa-youtube"></i>  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
         
        <div class="search">
  <input type="search" class="search-box" value={val} onChange={(e)=>setVal(e.target.value)  } />
  <span class="search-button">
    <span class="search-icon"></span>
  </span> <button onClick={search}> search </button>
</div>
         
  
      </ul>

      

          </div>
        </div>
    </nav>
        </> 

        ); 
     
}

export default Navbar    
