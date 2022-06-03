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

const NewsItem = () => {

  return (
    <>
    {/* <NewsItemBlock>
      <NewsItemContext.Consumer>
         {value => (
          <div className="border-solid border-2 border-indigo-600 w-full">
            {value.urlToImage && (
            <div className="thumbnail">
              <a href={value.url} target="_blank" rel="noopener noreferrer">
                <img src={value.urlToImage} alt="thumbnail" />
              </a>
            </div>
            )}
            <div>
              <h2 className="text-3xl font-bold">
                <a className="text-black" href={value.url} target="_blank" rel="noopener noreferrer">
                  {value.title}
                </a>
              </h2>
            <p>{value.description}</p>
            </div>                      
          </div>
        )} 
      </NewsItemContext.Consumer>
    </NewsItemBlock> */}
    <div className="w-[58rem] h-52 rounded-lg w-full bg-white drop-shadow-lg flex justify-around items-center">
      <img className="w-1/5 h-4/5 object-cover ml-5" src='https://via.placeholder.com/160' alt='thumbnail'/>
      <div className="w-2/3 h-4/5">
        <div className="w-full h-1/4 text-xl">
        기준금리 인상 영향…은행 대출금리 8년래 최고치
        </div>
        <div className="w-full h-3/5 overflow-hidden text-ellipsis line-clamp-3 leading-loose">
        한국은행의 기준금리 인상에 맞춰 은행권 가계대출 금리가 8년 1개월 만에 최고 수준으로 올랐다.

31일 한국은행이 발표한 4월 금융기관 가중평균금리 자료를 보면, 지난달 국내 예금은행의 가계대출 평균 금리는 지난달보다 0.07%포인트 오르면서 4.05%를 기록했다.

이는 2014년 5월(4.02%) 이후 7년 11개월 만에 처음으로 가계대출금리가 4%를 웃돈 결과다. 아울러 2014년 3월 4.09% 이후 8년 1개월 만에 가장 높은 수준이다.

가계대출 가운데 큰 비중을 차지하는 주택담보대출 금리는 지난달 3.90%를 기록했다. 이는 2013년 3월(3.97%) 이후 9년 1개월 만에 가장 높은 수준이다.      

        </div>
      </div>      
    </div>
  </> 
  )
}
export default NewsItem;