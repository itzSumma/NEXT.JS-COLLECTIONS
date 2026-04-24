import Link from "next/link";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      slug: "getting-started-nextjs",
      author: "Tisha Sultana",
      date: "2026-04-10",
      description:
        "Learn the basics of Next.js, including routing, pages, and server-side rendering.",
    },
    {
      id: 2,
      title: "Understanding React Components",
      slug: "understanding-react-components",
      author: "Tisha Sultana",
      date: "2026-03-28",
      description:
        "A beginner-friendly guide to React components, props, and state management.",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features You Must Know",
      slug: "javascript-es6-features",
      author: "Tisha Sultana",
      date: "2026-03-15",
      description:
        "Explore modern JavaScript features like arrow functions, destructuring, and modules.",
    },
    {
      id: 4,
      title: "How to Build a Blog with Next.js",
      slug: "build-blog-nextjs",
      author: "Tisha Sultana",
      date: "2026-02-20",
      description:
        "Step-by-step tutorial on creating a simple blog using Next.js and dynamic routing.",
    },
  ];

  return (
    <div >
      <h2 className="text-4xl text-center text-green-500 p-5">
        Here are our Blogs ...{" "}
      </h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2 className="text-4xl font-bold">{blog.title}</h2>
          <p className="text-lg text-gray-600">
            By {blog.author} on {blog.date}
          </p>
          <Link
            href={`/blogs/${blog.id}`}
            className="btn btn-outline btn-secondary">
            Show Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
