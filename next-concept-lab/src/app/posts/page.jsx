
export const metadata = {
  title: 'Posts Page',
  description: 'Here you can find all the posts',
}
// const getPosts = async ()=>{
//     const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }
/*
 * reusable+ clean architecture+testing easy+ use for multiple pages
 */

// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }

//   return res.json();
// };

/*
*
*/

 const getPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch posts");
  }
};

/*
*
*/

const PostsPage = async () => {
  // const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();
  /*
   * *not reusable + fetch logic in component+simple but messy for big projects
   */
  const posts = await getPosts();

  return (
    <div>
      <h2 className="text-center text-red-500 text-4xl font-bold mt-5">
        Here are our Posts:{posts.length}
      </h2>
    </div>
  );
};

export default PostsPage;
