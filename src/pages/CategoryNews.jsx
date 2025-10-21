import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard/NewsCard';

const CategoryNews = () => {

    const [news, setNews] = useState([]);

    const {id} = useParams();
    
    const data = useLoaderData();
    // console.log(data)
    
    useEffect( ()=>{

        if(id == '0'){
            setNews(data);
            return;
        }else if( id == '1'){

            const filteredNews = data.filter( news => news.others.is_today_pick == true );
            setNews(filteredNews)
        }else{

            const filteredNews = data.filter( news => news.category_id == id );
            // console.log(filteredNews)
            setNews(filteredNews)
        }

    }, [data, id])

    if(news.length==0){
        return (
            <div className='text-center w-10 mx-auto'>No Category found</div>
        )
    }

    return (
        <div>
            <h2 className='text-xl font-bold mb-3'>Dragon News Home</h2>

            <div className='flex flex-col gap-5'>
                {
                    news.map( singleNews => <NewsCard key={singleNews.id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;