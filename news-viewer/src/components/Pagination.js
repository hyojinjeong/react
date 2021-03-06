import React, { useContext } from 'react';
import { NavLink, useNavigate } from "../../node_modules/react-router-dom/index";
import { Context } from '../context/Provider';

const Pagination = ({totalPage})=> {

  const navigate = useNavigate();    
  const ctxVal = useContext(Context);    

  const rendering = () => {
    let result = [];
    for(let i=1; i<=totalPage; i++){
      result.push(<li>
      <NavLink 
        key={i}
        to={`/${ctxVal.category}/${i}`}
        className={({isActive}) => (isActive ? "py-2 px-3 leading-tight text-gray-500 bg-main border border-gray-300" : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white")}>
        {i}
      </NavLink>
      {/* <a href="#" onClick={(e)=>{setcurPage(e.target.innerText)}} className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i}</a> */}
    </li>)
    }
    return result;
  }

  const prevClicked = () => {
    if(+ctxVal.page === 1){
      alert('첫번째 페이지 입니다.');
    } else {
      navigate(`/${ctxVal.category}/${ctxVal.page-1}`);
    }
  }

  const nextClicked = () => {
    if(+ctxVal.page === totalPage){
      alert('마지막 페이지 입니다.');
    } else {
      navigate(`/${ctxVal.category}/${+ctxVal.page+1}`);  
    }
  }

  return (
   <nav aria-label="Page navigation example">
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <a href="" onClick={prevClicked} className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="sr-only">Previous</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </a>
      </li>
      {rendering()}
      <li>
        <a href="" onClick={nextClicked} className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span class="sr-only">Next</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
      </li>
    </ul>
  </nav>   
    )
}

export default Pagination;