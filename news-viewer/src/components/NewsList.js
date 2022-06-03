import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';


const NewsList = () => {
  // const [url, setUrl] = useState('');
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [urlToImage, setUrlToImage] = useState('');
  // const {author, setAuthor} = useState('');
  // const [publishedAt, setPublishedAt] = useState('');
 const [list, setList] = useState('');

  useEffect(() => {
    async function fetchNews() {
      const {data} = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=a218d6139fbb4ef88bf47ed81a5af386')
      console.log(data.articles);
      setList(data.articles.map((item) => 
      <NewsItem key={item.publishedAt} props={item}/>));
    }
    fetchNews();
  }, []);

  return (
    // <div className="relative top-28 flex-col flex justify-center items-center">   
    <>
    <div className="flex-col flex justify-center items-center h-4/5 pt-28 pb-28 space-y-7">      
      {/* <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />       */}
      {list}
      {/* <div style={{width: '50%', height: '100%', backgroundColor: 'black'}}></div> */}
      {/* <Pagination /> */}
    </div>                     
    </>
  )
}

export default NewsList;