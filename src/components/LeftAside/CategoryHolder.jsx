import React, { use } from 'react';
import { NavLink } from 'react-router';
// import './CategoryHolder.css'

const categoryPromise = fetch('/categories.json').then( res => res.json() );

const CategoryHolder = () => {
    
    const categories = use(categoryPromise);
    // console.log(categories)

    return (
        <div className='category-holder flex flex-col gap-5'>
            <h2 className='font-bold'>All Categories ({categories.length})</h2>
            <div className='flex flex-col justify-center'>    
                {
                    categories.map( category => <NavLink key={category.id} to={`/category/${category.id}`} className='px-10 py-2.5 font-bold text-accent rounded hover:bg-gray-100'>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default CategoryHolder;