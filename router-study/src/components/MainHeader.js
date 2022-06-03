import { Link, Switch, Route, Redirect } from 'react-router-dom';
// import Welcome from '../pages/Welcome';
// import About from '../pages/About';
// import Member from '../pages/Member';
import './MainHeader.module.css';
// import MemberDetail from '../pages/MemberDetail';
// import dummy from '../data.json'

const MainHeader = ({isAuthorized, children}) => {
  return (
    <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Welcome</Link>    
          </li>
          <li>
            <Link to='/about'>About</Link>          
          </li>
          <li>
          {!isAuthorized ? <Link to='/login'>Members</Link>: <Link to='/member'>Members</Link> }          
          </li>             
        </ul>
      </nav>
    </header>
    {children.map(e => e)}
    </div>  
  )
}

export default MainHeader;