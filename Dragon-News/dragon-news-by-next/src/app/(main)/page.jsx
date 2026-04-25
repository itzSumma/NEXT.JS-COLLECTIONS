// async function getCategories() {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/news/categories",
//   );
//   const data = await res.json();
//   return data.data;

import LeftsideBar from "@/Components/Homepage/NewsBars/LeftsideBar";
import RightSideBar from "@/Components/Homepage/NewsBars/RightSideBar";

// }
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

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category, "categories");

  // News 
  const news = await getNewsByCategoryId('04');
  console.log(news, "news");
  return (
   <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 my-6 md:my-15 ">
   
  {/* Left sidebar */}
  <div className="md:col-span-3 col-span-1">
    <LeftsideBar categories={categories} activeId={null}></LeftsideBar>
  </div>

  {/* Middle */}
  <div className="md:col-span-6 col-span-1 ">
   <h2 className="text-center m-2 font-semibold text-2xl"> Dragon News Home</h2>

   <div className="space-y-4 p-5 ">
     {
      news.map(n=>{
        return <div key={n._id} className="p-5 rounded-md border ">
          <p>{n.title}</p>
        </div>
      })
    }
   </div>
  </div>

  {/* Right sidebar */}
  <div className="md:col-span-3 col-span-1 ">
 <RightSideBar ></RightSideBar>
  </div>
</div>
  );
}
