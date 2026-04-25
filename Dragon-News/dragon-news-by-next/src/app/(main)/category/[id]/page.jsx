
import LeftsideBar from '@/Components/Homepage/NewsBars/LeftsideBar';
import RightSideBar from '@/Components/Homepage/NewsBars/RightSideBar';
import React from 'react';
const getCategories = async ()=>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}
// Dragon news fetching
const getNewsByCategoryId = async (category_id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}
const NewsCategoryPage = async ({params}) => {
    // const paramsRes = await params;
    const {id} = await params;
    console.log(id, "paramsRes");

    // Main page.jsx
    const categories = await getCategories();
//   console.log(categories.news_category, "categories");

  // News 
  const news = await getNewsByCategoryId(id);
//   console.log(news, "news");
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 my-6 md:my-15 ">
   
  {/* Left sidebar */}
  <div className="md:col-span-3 col-span-1">
    <LeftsideBar categories={categories} activeId={id}></LeftsideBar>
  </div>

  {/* Middle */}
  <div className="md:col-span-6 col-span-1 ">
   <h2 className="text-center m-2 font-semibold text-2xl"> Dragon News Home</h2>

   <div className="space-y-4 p-5">
  {news?.length > 0 ? (
    news.map((n) => (
      <div key={n._id} className="p-5 rounded-md border">
        <p>{n.title}</p>
      </div>
    ))
  ) : (
    <div className="text-center mt-10 text-gray-500 p-10">
      <p className="text-2xl font-semibold text-indigo-500">No news found</p>
      <p className="text-lg font-medium">Try another category</p>
    </div>
  )}
</div>
  </div>

  {/* Right sidebar */}
  <div className="md:col-span-3 col-span-1 ">
 <RightSideBar ></RightSideBar>
  </div>
</div>
    );
};

export default NewsCategoryPage;