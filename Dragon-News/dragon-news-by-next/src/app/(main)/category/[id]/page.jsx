import LeftsideBar from '@/Components/Homepage/NewsBars/LeftsideBar';
import RightSideBar from '@/Components/Homepage/NewsBars/RightSideBar';
import Newscard from '@/Components/Homepage/NewsBars/Newscard';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
  const { id } =await  params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 my-6 md:my-15">

      {/* Left sidebar */}
      <div className="md:col-span-3 col-span-1">
        <LeftsideBar categories={categories} activeId={id} />
      </div>

      {/* Middle */}
      <div className="md:col-span-6 col-span-1">
        <h2 className="text-center m-2 font-semibold text-2xl">
          Dragon News Home
        </h2>

        <div className="space-y-4 p-5">
          {news?.length > 0 ? (
            news.map((n) => (
              <Newscard key={n._id} news={n} />
            ))
          ) : (
            <div className="text-center mt-10 text-gray-500 p-10">
              <p className="text-2xl font-semibold text-indigo-500">
                No news found
              </p>
              <p className="text-lg font-medium">Try another category</p>
            </div>
          )}
        </div>
      </div>

      {/* Right sidebar */}
      <div className="md:col-span-3 col-span-1">
        <RightSideBar />
      </div>

    </div>
  );
};

export default NewsCategoryPage;