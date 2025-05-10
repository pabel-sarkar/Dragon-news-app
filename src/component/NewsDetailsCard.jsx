import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
           <h2 className='text-2xl font-bold'>{news.title}</h2>
           <p>{news.details}</p>
           <Link to={`/categoty/${news.category_id}`}><button className='btn bg-red-500 text-white'>Back to category</button></Link>
        </div>
    );
};

export default NewsDetailsCard;