import React ,{ useState , useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Show from './Show';
import Edit from './Edit';
import Error from './Error';
import Add from './Add'
import Unknown from './Unknown'
import UnknownView from './UnknownView'
import RegisteredUser  from './RegisteredUser'
import Page2 from './Page2';
import NotFound from './NotFound'
function App() { 
  
 const [id ,setId] = useState('') ; 
//  function QueryParamsDemo (){
//   let query = useQuery(); 
// return (
//  <>
//   <Route exact path="/api/users?page=2"  component={Page2} />
// </>
// )

// }


  return (
   <>
 <Switch>
   
   <Route  exact path="/" component={Home} />
   
    
   <Route exact path="/api/users/23"  component={NotFound} />
   <Route exact path="/api/unknown"  component={Unknown} />
   <Route exact path="/api/unknown/:uId"  component={UnknownView} />
   <Route exact path="/api/users/page2"  component={Page2} />
      <Route exact path="/users/:user_id"  component={Show} />
      <Route exact path="/api/users/:uid"  component={Edit} />
      <Route exact path="/inserted/data/:alldata"  component={RegisteredUser} />
   
   <Route exact path="/edit/:editUserId"  component={Edit} />
   <Route exact path="/users/"  component={Add} />
   <Route exact  component={Error} />

   {/* <Route exact path="/users/:deleteUserId"  component={Show} /> */}

   </Switch>    
      </>  
 
 )


 


}

export default App;
