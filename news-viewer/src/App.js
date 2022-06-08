import { Route, Routes } from 'react-router-dom';
import { Provider } from './context/Provider';
import NewsPage from './pages/NewsPage';

function App() {
 
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<NewsPage />}></Route>
        <Route path="/:category" element={<NewsPage />}>
           <Route path=":page" element={<NewsPage />}></Route> 
        </Route>          
      </Routes>
    </Provider>    
    )
  }
export default App;
