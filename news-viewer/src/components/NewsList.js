import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import MainNewsPage from './MainNewsPage';
import Pagination from './Pagination';

const NewsList = ({category, pageNum}) => {
 const [loading, setLoading] = useState(false);
 const [list, setList] = useState(null);
 const [curPage, setcurPage] = useState(pageNum); 
 const [perPage, setperPage] = useState(10);
 const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try{
        const query = category === 'all' ? '' : `&category=${category}`;
        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&pageSize=${perPage}&page=${curPage}&apiKey=2e17e63d77da4ca18fa81c404dd4c6d2`);
        setList(data.articles);
        let totalP = Math.trunc(data.totalResults / perPage) + (data.totalResults % perPage && 1);
        setTotalPage(totalP); 

        console.log('curPage', curPage);       
        setLoading(false);
      } catch(e) {
        console.log(e);
      }
    }
    fetchNews();
 }, [curPage, category]);
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
      {category === 'all' ? <MainNewsPage list={list} /> : list.map(item => <NewsItem key={item.url} props={item} />)}   
      {category==='all' ? '' : <Pagination totalPage={totalPage} setcurPage={setcurPage} curPage={curPage} category={category}/>}
    </div>                     
    </>
  )
}

export default NewsList;