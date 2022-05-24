import { Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import About from './pages/About';
import Member from './pages/Member';
import Welcome from './pages/Welcome';

import dummy from './data.json'
import MemberDetail from './pages/MemberDetail';

function App() {
  const members = dummy;
  
  return (
    <div>
      <header>
        <MainHeader />
      </header>     
      <main>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/member" exact>
          <Member memberList={members} />
        </Route>     
        <Route path="/member/:memberId">
          <MemberDetail memberList={members}/>
        </Route>        
      </Switch>       
      </main>
    </div>
  );
}

export default App;
