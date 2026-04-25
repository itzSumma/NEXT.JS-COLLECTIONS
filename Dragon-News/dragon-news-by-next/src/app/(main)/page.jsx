// async function getCategories() {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/news/categories",
//   );
//   const data = await res.json();
//   return data.data;

import LeftsideBar from "@/Components/Homepage/NewsBars/LeftsideBar";

// }
const getCategories = async ()=>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category, "categories");
  return (
   <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 my-6 md:my-15">
   
  {/* Left sidebar */}
  <div className="md:col-span-3 col-span-1">
    <LeftsideBar categories={categories} activeId={null}></LeftsideBar>
  </div>

  {/* Middle */}
  <div className="md:col-span-6 col-span-1 text-2xl font-bold bg-emerald-200">
    Dragon News Home
  </div>

  {/* Right sidebar */}
  <div className="md:col-span-3 col-span-1 text-2xl font-bold bg-teal-200">
    Social icons
  </div>
</div>
  );
}
