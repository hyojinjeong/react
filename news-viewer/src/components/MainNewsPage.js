import Card from "./Card";

const MainNewsPage = ({ list }) => {
 return (
   <>
    <div className="w-5/12 h-80 mb-bg-white drop-shadow-lg rounded-lg bg-white drop-shadow-lg flex justify-around items-center space-x-3">
      <div className="w-2/5 h-4/5">
        <a href={list.url}>
          <img className="w-full h-full object-cover ml-5" src={list[0].urlToImage ? list[0].urlToImage : 'https://via.placeholder.com/160'} alt='thumbnail'/>
        </a>
      </div>
      <div className="w-1/2 h-4/5">
        <div className="w-11/12 h-1/6 text-xl font-bold truncate">
        {list[0].title}
        </div>
        <div className="w-11/12 h-3/4 overflow-hidden text-ellipsis line-clamp-6 leading-loose">
        {list[0].description}
        </div>
        <div className="text-slate-400">
          {`${list[0].publishedAt.slice(5,7)}월 ${list[0].publishedAt.slice(8,10)}일 ${list[0].publishedAt.slice(11,19)}`}
        </div>
      </div> 
    </div>
    <div className="text-2xl font-bold w-7/12">
      <div className="mt-16">최근 많이 본 기사</div>
    </div>
    <div className="w-7/12 h-80 flex justify-between space-x-5">
      {list.slice(1, 5).map(e => <Card key={e.url} articles={e}/>)}           
    </div>  
    <div className="text-2xl font-bold w-7/12">
      <div className="mt-16">댓글이 많은 기사</div>
    </div>
    <div className="w-7/12 h-80 flex justify-between space-x-5">
      {list.slice(5, 9).map(e => <Card key={e.url} articles={e}/>)}           
    </div>                
    </>     
 )
}

export default MainNewsPage;