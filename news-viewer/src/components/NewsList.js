import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import MainNewsPage from './MainNewsPage';

const NewsList = ({category}) => {
 const [loading, setLoading] = useState(false);
 const [list, setList] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try{
        const query = category === 'all' ? '' : `&category=${category}`;
        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9a55363f37994561be29c723d0a1373e`);
        console.log(data.articles[3]);
        setLoading(false);
        setList(data.articles);
      } catch(e) {
        console.log(e);
      }
    }
    fetchNews();
  }, [category]);

  if(loading){
    return '대기중...';
  }
  if(!list){
    return null;
  }

  return (
    <>
    <div className="flex-col flex justify-center items-center h-4/5 pt-28 pb-28 space-y-7">   
      {category === 'all' ? <MainNewsPage list={list} /> : list.map(item => <NewsItem key={item.url} props={item} />)}   
      {/* <Pagination /> */}
    </div>                     
    </>
  )
}

export default NewsList;