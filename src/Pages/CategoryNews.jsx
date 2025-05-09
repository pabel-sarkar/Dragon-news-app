import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../component/NewsCard/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categotyNews,setCategoryNews] = useState([]);

    // console.log(id,data)
    useEffect(()=>{
        if(id == '0'){
            setCategoryNews(data)
            return
        }  else if (id == '1') {
            const filterNews = data.filter((news)=>news.others.is_today_pick == true)
            setCategoryNews(filterNews)
        }
        else{
            const filterNews = data.filter((news)=>news.category_id == id)
            setCategoryNews(filterNews)
        }
       
    },[data,id])
    return (
        <div className='font-bold mb-5'>
          <h2 className=''>total <span className='text-red-300'>{categotyNews.length}</span> Found</h2>
        <div className="grid grid-cols-1 gap-5\">
           {
              categotyNews.map((category)=> <NewsCard key={category.id} category={category}></NewsCard>)
           }
        </div>
        </div>
    );
};

export default CategoryNews;