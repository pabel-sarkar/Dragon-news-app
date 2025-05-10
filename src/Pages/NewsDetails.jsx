import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import RiightAside from '../component/HomeLayout/RiightAside';
import NewsDetailsCard from '../component/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news,setnews] = useState({})

    useEffect(()=>{
        const newsDetails = data.find(singleNews=>singleNews.id == id);
        setnews(newsDetails)
    },[data,id])
    // console.log(news)
 
    return (
        <div>
           <header className='py-3'>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
             <section className='col-span-9'>
                <h2 className='font-bold mb-5'>News detils</h2>
                <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
             </section>
             <aside className='col-span-3'>
                <RiightAside></RiightAside>
             </aside>
          </main>
        </div>
    );
};

export default NewsDetails;