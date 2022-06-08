import React, { useContext } from 'react';
import { NavLink } from "../../node_modules/react-router-dom/index";
import { Context } from '../context/Provider';

const categories = [
  {
    name: 'all',
    text: '전체'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'  
  },
  {
    name: 'health',
    text: '건강' 
  }, 
  {
    name: 'science',
    text: '과학'  
  },     
  {
    name: 'sports',
    text: '스포츠' 
  },    
  {
    name: 'technology',
    text: '기술'
  },  
]

const Categories = () => {
  const ctxVal = useContext(Context);

  return (
    <>
      <div className='fixed inset-x-0 top-0 w-full h-14 bg-main flex justify-center font-bold z-10'>
        <div className='flex items-center space-x-11 text-white text-lg'>
          {categories.map( e => 
          <NavLink 
            key={e.name}
            to={e.name==='all'? '/' : `/${e.name}/${ctxVal.page}`}  
            className={({isActive}) => (isActive ? 'border-solid border-b-4 border-white' : undefined)}>
            {e.text}
          </NavLink>)}                                                  
        </div>
      </div>
    </>
  )
}

export default Categories;