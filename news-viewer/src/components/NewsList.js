import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import MainNewsPage from './MainNewsPage';
import Pagination from './Pagination';

const NewsList = ({category, page}) => {

 const [loading, setLoading] = useState(false);
 const [list, setList] = useState(null);
 const [perPage, setperPage] = useState(10);
 const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try{
        const query = category === 'all' ? '' : `&category=${category}&page=${page}&pageSize=${perPage}`;
        const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a218d6139fbb4ef88bf47ed81a5af386`);
        // const data = {
        //   "status": "ok",
        //   "totalResults": 37,
        //   "articles": [
        //   {
        //   "source": {
        //   "id": "cnn",
        //   "name": "CNN"
        //   },
        //   "author": "CNN",
        //   "title": "How law enforcement's narrative of the Uvalde massacre has changed - CNN",
        //   "description": "Since the school massacre in Uvalde, Texas, authorities have repeatedly changed their story before, during and after the bloody siege. Here’s what we know.",
        //   "url": "https://www.cnn.com/interactive/2022/06/us/uvalde-police-narratives-texas-shooting/index.html",
        //   "urlToImage": "https://www.cnn.com/interactive/uploads/20220603-uvalde-police-narratives-texas-shooting.jpg",
        //   "publishedAt": "2022-06-03T23:23:42Z",
        //   "content": "Then He engaged with a school police officer \r\nAuthorities initially said that after the gunman shot his grandmother and crashed a truck in a ditch near Robb Elementary School, a school resource offi… [+1456 chars]"
        //   },
        //   {
        //   "source": {
        //   "id": null,
        //   "name": "New York Times"
        //   },
        //   "author": "Trip Gabriel",
        //   "title": "David McCormick Concedes to Dr. Oz in the G.O.P. Primary for Senate in Pennsylvania - The New York Times",
        //   "description": "With a statewide recount still underway, Mr. McCormick stepped aside to Dr. Mehmet Oz, who is set to be the Republican nominee in one of this year’s most pivotal midterm races.",
        //   "url": "https://www.nytimes.com/2022/06/03/us/elections/pennsylvania-senate-oz-mccormick.html",
        //   "urlToImage": "https://static01.nyt.com/images/2022/05/17/multimedia/17primary-live-pasenate-repubs-hfo/17primary-live-pasenate-repubs-hfo-facebookJumbo.jpg",
        //   "publishedAt": "2022-06-03T22:56:05Z",
        //   "content": "Dr. Oz and Mr. McCormick, both first-time candidates, worked hard to transform themselves from members of the East Coast elite, with middle-of-the-road politics, into credible champions of the MAGA m… [+3929 chars]"
        //   },
        //   {
        //   "source": {
        //   "id": "cbs-news",
        //   "name": "CBS News"
        //   },
        //   "author": "Kathryn Watson, Robert Legare",
        //   "title": "Former top Trump aide Peter Navarro indicted by grand jury for contempt of Congress - CBS News",
        //   "description": "The former top Trump aide refused to appear before that Jan. 6 elect committee.",
        //   "url": "https://www.cbsnews.com/news/peter-navarro-indicted-for-contempt-congress/",
        //   "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2022/05/31/3c82fdac-510f-4372-a357-999d9d7120d9/thumbnail/1200x630/138b543c414554812e07a77f0b8a1563/gettyimages-1228045438.jpg",
        //   "publishedAt": "2022-06-03T22:52:00Z",
        //   "content": "Former top Trump White House aide Peter Navarro has been indicted by a grand jury on two counts of contempt of Congress, according to court documents.\r\nThe contempt indictment stems from the former t… [+3186 chars]"
        //   },
        //   {
        //   "source": {
        //   "id": null,
        //   "name": "YouTube"
        //   },
        //   "author": null,
        //   "title": "Vivica A. Fox CALLS OUT Jada Pinkett Smith for Oscars Slap Remarks - Entertainment Tonight",
        //   "description": "Vivica A. Fox is calling out Jada Pinkett Smith! On Thursday's episode of 'The Wendy Williams Show,’ the actress got emotional over the comments Jada made on...",
        //   "url": "https://www.youtube.com/watch?v=8xAhleO23ks",
        //   "urlToImage": "https://i.ytimg.com/vi/8xAhleO23ks/hqdefault.jpg",
        //   "publishedAt": "2022-06-03T22:51:14Z",
        //   "content": null
        //   },
        //   {
        //   "source": {
        //   "id": "nfl-news",
        //   "name": "NFL News"
        //   },
        //   "author": "Bucky Brooks",
        //   "title": "First look at No. 1 pick Travon Walker's fit with Jags; plus, an exploding NFL trend and a legit QB battle - NFL.com",
        //   "description": "In this edition of the Scout's Notebook, Bucky Brooks reports from Jacksonville on polarizing No. 1 overall pick Travon Walker's fit with the Jaguars. Plus, a look at one exploding NFL trend and a legit quarterback battle on the NFC side.",
        //   "url": "https://www.nfl.com/news/first-look-at-no-1-pick-travon-walker-s-fit-with-jags-plus-an-exploding-nfl-tren",
        //   "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/jughxrsb6m9gw4yvnytt",
        //   "publishedAt": "2022-06-03T22:37:00Z",
        //   "content": "JACKSONVILLE, Fla. -- The biggest challenge for NFL evaluators is determining whether a prospect is an ideal fit for the team's scheme. For a media scout, the lack of information and insight from eac… [+2422 chars]"
        //   }
        //   ]
        //   };
        setList(data.articles);
        let totalP = Math.trunc(data.totalResults / perPage) + (data.totalResults % perPage && 1);
        setTotalPage(totalP); 
        setLoading(false);
      } catch(e) {
        console.log(e);
      }
    }
    fetchNews();
 }, [page, category]);
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
      {category==='all' ? '' : <Pagination totalPage={totalPage} category={category}/>}
    </div>                     
    </>
  )
}

export default NewsList;