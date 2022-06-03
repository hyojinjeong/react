import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import React, {useState} from 'react';
import MainHeader from './components/MainHeader';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Member from './pages/Member';
import MemberDetail from './pages/MemberDetail';
import dummy from './data.json'
import './App.css';

function App() {
  const [isAuthorized, setIsAuthroized] = useState(false);
  const [is404, set404] = useState('');  
  const members = dummy;
  console.log(useLocation().pathname);
  return (
    <>
    <Switch>           
      <Route path="/login">
        {isAuthorized ? <Redirect to="/member" />: <Login setIsAuthroized={setIsAuthroized}/>}            
      </Route>     
      <Route path="/" exact>
        <Redirect to="/home" />         
      </Route>  
      <Route>         
        <MainHeader isAuthorized={isAuthorized}>
          <Route path="/home" exact>
            <Welcome />
          </Route>          
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/member" exact>
            <Member memberList={members} />
          </Route>     
          <Route path="/member/:memberId" exact>
            <MemberDetail memberList={members}/>
          </Route>   
          {/* <Route path="*" exact>
        <NotFound />         
      </Route>                 */}
        </MainHeader>                
      </Route>  
                              
    </Switch>                                                                 
    </> 
  );
}

export default App;
