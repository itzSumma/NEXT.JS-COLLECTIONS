import Link from 'next/link';
import React from 'react';

const LeftsideBar = ({categories,activeId}) => {
    return (
        <div>
            <h2 className="text-lg text-center font-bold">All Categories</h2>

    <ul className="flex flex-col gap-3 mt-6">
      {categories.news_category.map((category) => (
        <li
          className={`${activeId === category.category_id && "bg-slate-100" }
            p-2 rounded-md text-lg text-center font-semibold`}
          key={category.category_id}
        >
         <Link href={`/category/${category.category_id}`} className='block  p-2 rounded-md'> {category.category_name} </Link>
        </li>
      ))}
    </ul>
        </div>
    );
};

export default LeftsideBar;