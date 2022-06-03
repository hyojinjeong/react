// import styled from 'styled-components';
// import NewsItemContext from '../context/newsList';

// const NewsItemBlock = styled.div`
//   display: flex;
//   .thumbnail {
//     margin-right: 1rem;
//     img{
//       display: block;
//       width: 160px;
//       height: 100px;
//       object-fit: cover;
//     }
//   }
//   .contents {

//   }
//   & + & {
//     margin-top: 3rem;
//   }
// `;

const NewsItem = ({props}) => {

  return (
    <>
    <div className="w-[58rem] h-52 rounded-lg w-full bg-white drop-shadow-lg flex justify-around items-center">
      <img className="w-1/5 h-4/5 object-cover ml-5" src={props.urlToImage} alt='thumbnail'/>
      <div className="w-2/3 h-4/5">
        <div className="w-full h-1/4 text-xl font-bold truncate">
        {props.title}
        </div>
        <div className="w-full h-3/5 overflow-hidden text-ellipsis line-clamp-3 leading-loose">
        {props.description}
        </div>
        <div className="text-slate-400 mt-2">
          06월 03일 17:55
        </div>
      </div>      
    </div>
  </> 
  )
}
export default NewsItem;