import { createContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';

// const Provider = createContext(
//   {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160'
//   });

const Context = createContext(undefined);

function Provider({children}){
  const url = useLocation();
  const result = url.pathname.substring(1).split('/');
  console.log(result);

  const category = result[0] || 'all';
  const page = result[1] || 1;

  const contextVal = {
    category, page
  }

  return(
    <Context.Provider value={contextVal} >
      {children}
    </Context.Provider>
  );
}
export { Provider, Context };
