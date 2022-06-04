
const NewsItem = ({props}) => {

  return (
    <>
    <div className="w-[58rem] h-52 rounded-lg w-full bg-white drop-shadow-lg flex justify-around items-center">
      <div className="w-1/5 h-4/5 ml-5">
        <a href={props.url}>
          <img className="object-cover w-full h-full" src={props.urlToImage ? props.urlToImage : 'https://via.placeholder.com/160'} alt='thumbnail'/> 
        </a>
      </div>
      <div className="w-2/3 h-4/5">
        <div className="w-full h-1/4 text-xl font-bold truncate">
        {props.title}
        </div>
        <div className="w-full h-3/5 overflow-hidden text-ellipsis line-clamp-3 leading-loose">
        {props.description}
        </div>
        <div className="text-slate-400 mt-2">
          {`${props.publishedAt.slice(5,7)}월 ${props.publishedAt.slice(8,10)}일 ${props.publishedAt.slice(11,19)}`}
        </div>
      </div>      
    </div>
  </> 
  )
}
export default NewsItem;