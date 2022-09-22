import React, { useEffect, useState } from 'react'
import axios from 'axios'

function NewsFeed() {
  const [articles, setArticles] = useState(null);

  useEffect(()=> {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': 'f912d2dfd4mshca6ac7fb6d581dbp104c53jsn59917ff099c2',
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
      }
    };
    
    axios.request(options).then((response) => {
      console.log(response.data);
      setArticles(response.data)
    }).catch((error) => {
      console.error(error);
    });
  },[])
   console.log(articles)

  //getting data from API, and then slicing it to only 5 articles
  const first5Articles = articles?.slice(0,5)

  return (
    <div className="news-feed">
        <h2>News Feed Articles</h2>
        {first5Articles?.map((article, index) => (
            <div key={index}>
                <a href={article.url}><p>{article.title}</p></a>
            </div>))}
    </div>
)
}

export default NewsFeed