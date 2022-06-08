import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import MainNewsPage from './MainNewsPage';
import Pagination from './Pagination';
import { Context } from '../context/Provider';

const NewsList = () => {

 const [loading, setLoading] = useState(false);
 const [list, setList] = useState(null);
 const [perPage, setperPage] = useState(10);
 const [totalPage, setTotalPage] = useState(0);
 const ctxVal = useContext(Context);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try{
        const query = ctxVal.category === 'all' ? '' : `&category=${ctxVal.category}&page=${ctxVal.page}&pageSize=${perPage}`;
        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9a55363f37994561be29c723d0a1373e`);

        setList(data.articles);
        let totalP = Math.trunc(data.totalResults / perPage) + (data.totalResults % perPage && 1);
        setTotalPage(totalP); 
        setLoading(false);
      } catch(e) {
        console.log(e);
      }
    }
    fetchNews();
 }, [ctxVal.page, ctxVal.category]);
// }, [curPage]);

  if(loading){
    return '대기중...';
  }
  if(!list){
    return null;
  }

  return (
    <>
    <div className="flex-col flex justify-center items-center h-4/5 pt-28 pb-28 space-y-7">   
      {ctxVal.category === 'all' ? <MainNewsPage list={list} /> : list.map(item => <NewsItem key={item.url} props={item} />)}   
      {ctxVal.category==='all' ? '' : <Pagination totalPage={totalPage} />}
    </div>                 
    </>
  )
}

export default NewsList;