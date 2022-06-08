
const Card = ({articles}) => {
  return(
    <div className="w-2/5 rounded-lg bg-white drop-shadow-lg bg-white drop-shadow-lg">
      <a href={articles.url}>
        <img className="w-full rounded-tl-lg rounded-tr-lg h-2/3 object-cover" src={articles.urlToImage ? articles.urlToImage : 'https://via.placeholder.com/160'} alt='thumbnail'/>
      </a>
      <div className="w-full h-18 text-lg font-bold p-2 overflow-hidden text-ellipsis line-clamp-3">
        {articles.title}
      </div>   
    </div>  
  )
}
export default Card;