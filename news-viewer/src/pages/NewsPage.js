import { useContext } from 'react';
// import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { Context } from '../context/Provider';

const NewsPage = () => {

  //const params = useParams();
  // const category = params.category || 'all';
  // const page = params.page || 1;

  // const ctxVal = useContext(Context);
  // const category = ctxVal.category || 'all';
  // const page = ctxVal.page || 1;  
  // console.log('ctxVal', ctxVal);

  return (
    <>
      {/* <Categories page={page}/>
      <NewsList category={category} page={page}/> */}
      <Categories />
      <NewsList />  
    </>
  )
}

export default NewsPage;