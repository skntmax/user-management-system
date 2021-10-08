import {React , useState} from 'react'
import { Redirect, NavLink} from 'react-router-dom';
import './ls.css'
import Signup from './Signup';



function Login() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

const submit=(e)=>{
e.preventDeafault();

alert(email+ password)
setEmail(e.target.value)
setPassword(e.target.value)


console.log("after ")

alert(email+ password)

if(email=="skntjee@gmail.com" &&password=='987') {
 return(
      <>
       <Redirect exact to='/dashboard' />
      </>
 )
}

}

   return (
        <>  
 
<div className="container login-container">
            
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={submit}  type="post">
                        <div className="form-group">
                            <input type="text" className="form-control" name="email" onChange={ (e)=>setEmail(e.target.value) } value={email}  placeholder="Your Email "  />   
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" onChange={ (e)=>setPassword(e.target.value) } value={password}   placeholder="Your Password *"   />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login"  />
                        </div>
                        <div className="form-group"> 
                        <NavLink  exact to="/signup"  className="ForgetPwd" > Signup</NavLink >
                            
                        
                        </div>
                    </form>
                </div>    

            </div>

        
            
        </>
    )
}


export default Login  ;