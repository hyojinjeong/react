import { NavLink, useParams, useNavigate } from "../../node_modules/react-router-dom/index";

const Pagination = ({totalPage, category})=> {
  const { page } = useParams(); 
  const navigate = useNavigate();

  const rendering = () => {
    let result = [];
    for(let i=1; i<=totalPage; i++){
      result.push(<li>
      <NavLink 
        key={i}
        to={`/${category}/${i}`}
        className={({isActive}) => (isActive ? "py-2 px-3 leading-tight text-gray-500 bg-main border border-gray-300" : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white")}>
        {i}
      </NavLink>
      {/* <a href="#" onClick={(e)=>{setcurPage(e.target.innerText)}} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i}</a> */}
    </li>)
    }
    return result;
  }

  const prevClicked = () => {
    if(page === 1){
      return;
    } else {
      navigate(`/${category}/${page-1}`);
    }
  }

  return (
   <nav aria-label="Page navigation example">
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <a href="#" onClick={prevClicked} className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Previous</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </a>
      </li>
      {rendering()}
      <li>
        <a href="#" className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span class="sr-only">Next</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
      </li>
    </ul>
  </nav>   
    )
}

export default Pagination;