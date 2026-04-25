// async function getCategories() {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/news/categories",
//   );
//   const data = await res.json();
//   return data.data;

import { redirect } from "next/navigation"


// Dragon news fetching
const default_category_id = "01";

const Home = async()=> {
redirect(`/category/${default_category_id}`)
}
export default Home