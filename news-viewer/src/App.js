// import React,  { useState } from 'react';
// import axios from 'axios';
import { useCallback, useState } from 'react';
import { Reset } from 'styled-reset';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);
  // console.log(category);
  // return (
  //   <div>
  //     <Reset />
  //     <Categories category={category} onSelect={onSelect}/>
  //     <NewsList category={category}/>
  //   </div>
  // )
  return (
    <Routes>
      <Route path="/" element={<NewsPage />}></Route>
      <Route path="/:category" element={<NewsPage />}></Route>      
    </Routes>
    )
  }
export default App;
