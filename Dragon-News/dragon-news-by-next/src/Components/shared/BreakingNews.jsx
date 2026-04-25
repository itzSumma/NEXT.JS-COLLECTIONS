import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    id: 1,
    title: "Global Markets See Sudden Rise Amid Tech Boom",
  },
  {
    id: 2,
    title: "Heavy Rainfall Expected Across Bangladesh",
  },
  {
    id: 3,
    title: "New AI Model Breaks Performance Records",
  },
  {
    id: 4,
    title: "Local Team Wins Championship Final in Stunning Finish",
  },
];

const BreakingNews = () => {
    return (
        <div className='bg-gray-100 py-3 px-2 flex justify-between items-center gap-3 m-5 border border-zinc-100 rounded-lg container mx-auto'>
            <button className='bg-rose-500 btn text-white rounded-md'>Latest News</button>
            <Marquee className='font-mono text-lg' pauseOnHover={true}  speed={50} >{news.map((data)=>{ 
                 return   <span key={data.id}>{data.title}</span>
            })}</Marquee>
        </div>
    );
};

export default BreakingNews;