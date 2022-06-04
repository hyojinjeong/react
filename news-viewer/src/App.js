import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<NewsPage />}></Route>
      <Route path="/:category/:page" element={<NewsPage />}>
        {/* <Route path=":page" element={<NewsPage />}></Route>   */}
      </Route>          
    </Routes>
    )
  }
export default App;
