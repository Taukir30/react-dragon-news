import React, { Suspense } from 'react';
import CategoryHolder from './CategoryHolder';

const LeftAside = () => {
    return (
        <div className='left-aside'>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <CategoryHolder></CategoryHolder>
            </Suspense>
        </div>
    );
};

export default LeftAside;