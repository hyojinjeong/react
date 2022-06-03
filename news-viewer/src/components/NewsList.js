// import styled from 'styled-components';
// import NewsItemContext from '../context/newsList';
import NewsItem from './NewsItem';
// import Pagination from './Pagination';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }`;



const NewsList = () => {
  return (
    // <div className="relative top-28 flex-col flex justify-center items-center">   
    <>
    <div className="flex-col flex justify-center items-center h-4/5 pt-28 pb-28 space-y-7">      
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
      <NewsItem />
      <NewsItem />      
      {/* <div style={{width: '50%', height: '100%', backgroundColor: 'black'}}></div> */}
      {/* <Pagination /> */}
    </div>                     
    </>
  )
}

export default NewsList;