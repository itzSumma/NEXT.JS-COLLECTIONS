
const blogs = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        author: "Jhankar Mahbub",
        date: "2026-04-01",
        tags: ["JavaScript", "Closures", "Core Concepts"],
        content: "Closures are a fundamental concept in JavaScript that allow functions to access variables from an outer scope even after the outer function has executed."
    },
    {
        id: 2,
        title: "A Beginner’s Guide to React",
        author: "John Doe",
        date: "2026-03-28",
        tags: ["React", "Frontend", "JavaScript"],
        content: "React is a popular JavaScript library for building user interfaces. It helps developers create reusable UI components."
    },
    {
        id: 3,
        title: "Mastering CSS Grid Layout",
        author: "Jane Smith",
        date: "2026-03-25",
        tags: ["CSS", "Grid", "Web Design"],
        content: "CSS Grid is a powerful layout system that allows you to create complex and responsive web layouts with ease."
    },
    {
        id: 4,
        title: "Node.js Basics for Backend Development",
        author: "Alex Johnson",
        date: "2026-03-20",
        tags: ["Node.js", "Backend", "API"],
        content: "Node.js allows you to run JavaScript on the server side, making it a great choice for building scalable backend applications."
    }
];

const BlogDetailPage = async ({ params }) => {
    const { blogId } = await params;

    const blog = blogs.find(blog => blog.id === Number(blogId));
    
    console.log('show me params', blog)

    return (
        <div>
            <h4 className="text-3xl">Blog detail coming soon</h4>
            {blog && <div>
                <h2 className="text-4xl font-bold mb-2">{blog.title}</h2>
                <p>{blog.content}</p>
            </div>
            }
        </div>
    );
};

export default BlogDetailPage;