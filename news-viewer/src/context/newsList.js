import { createContext } from "react";

const NewsItemContext = createContext(
  {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
  });

export default NewsItemContext;