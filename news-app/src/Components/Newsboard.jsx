import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c2cb6930adc847a28d89a44bd8d11cd2`
    fetch(url)
      .then(res => res.json())
      .then(data=>{
        if (data && data.articles)
        {   
            let validnews=data.articles.filter(articles =>articles.urlToImage && articles.url) 
        setArticles(validnews)
        }
        
       else 
        console.error("No articles found");
  })
    .catch(error => console.error("Error fetching the news:", error));
}, [{category}]);

  console.log(articles)

  return (
    <div>
      <h2 className='text-center text-red-500 text-3xl'>
        Latest <span className='bg-danger badge'>News</span>{' '}
      </h2>
      <div className="container">
      {articles.map((news,idx)=>{
            return <Newsitem key={idx} src={news.urlToImage} url={news.url} title={news.title} description={news.description} />
        })}
      </div>
      
    </div>
  )
}

export default Newsboard
