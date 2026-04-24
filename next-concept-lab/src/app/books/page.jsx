import BookCard from "../components/BookCard/BookCard";

export const metadata = {
  title: "Books Page",
  description: "Here you can find all the books",
};
const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", { cache: "no-store" });
  const books = await res.json();

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold text-green-500 ">
        Books for reading:{books.length}
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8  ">
        {books.map((book, index) => (
          <BookCard key={index} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
