import React from 'react';
import MyContainer from '../MyContainer/MyContainer';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div>
            <MyContainer className={'flex items-center gap-5 bg-base-200 p-3'}>
                <span className='bg-secondary text-base-100 py-2 px-5'>Latest</span>
                <Marquee className='flex gap-10' pauseOnHover={true} speed={60}>
                    <p className='font-bold text-gray-200 mx-5'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                    <p className='font-bold text-gray-200 mx-5'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                    <p className='font-bold text-gray-200 mx-5'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </MyContainer>
        </div>
    );
};

export default LatestNews;