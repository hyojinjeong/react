// import React,  { useState } from 'react';
// import axios from 'axios';
import { Reset } from 'styled-reset';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

function App() {
  // const [data, setData] = useState(null);

  // const onClick = async () => {
  //   try {
  //     const response =  await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=a218d6139fbb4ef88bf47ed81a5af386');
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <div>
      <Reset />
      <Categories />
      <NewsList />
    </div>
  )
}

export default App;
