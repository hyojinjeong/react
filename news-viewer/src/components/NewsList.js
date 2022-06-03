import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';


const NewsList = ({category}) => {
  // const [url, setUrl] = useState('');
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [urlToImage, setUrlToImage] = useState('');
  // const {author, setAuthor} = useState('');
  // const [publishedAt, setPublishedAt] = useState('');
 const [loading, setLoading] = useState(false);
 const [list, setList] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try{
        const query = category === 'all' ? '' : `&category=${category}`;
        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a218d6139fbb4ef88bf47ed81a5af386`);
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
    // <div className="relative top-28 flex-col flex justify-center items-center">   
    <>
    <div className="flex-col flex justify-center items-center h-4/5 pt-28 pb-28 space-y-7">      
      {list.map(item => <NewsItem key={item.url} props={item} />)}
      {/* <Pagination /> */}
    </div>                     
    </>
  )
}

export default NewsList;