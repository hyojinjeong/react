
const Categories = () => {
  return (
    <>
      <div className='fixed inset-x-0 top-0 w-full h-14 bg-main flex justify-center font-bold z-10'>
        <ul className='flex items-center space-x-11 text-white text-lg'>
          <li>전체보기</li>
          <li>비즈니스</li>
          <li>엔터테인먼트</li>
          <li>건강</li>
          <li>과학</li>    
          <li>스포츠</li> 
          <li>기술</li>                                                   
        </ul>
      </div>
    </>
  )
}

export default Categories;