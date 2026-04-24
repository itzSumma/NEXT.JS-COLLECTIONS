import Link from "next/link";
export const metadata = {
  title: 'Books Details Page',
  description: 'All the details of the book',
}
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();

  return books.slice(0,3).map((book) => ({ bookId: book.id }));
};

const BookDetails = async ({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookId}`);

  if (!res.ok) {
    return <h2 className="text-red-500 text-center">Book not found</h2>;
  }

  const { title, author, price, description } = await res.json();

  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-center text-3xl">Book Details:{bookId}</h1>
      <p className="font-black text-xl">Title:{title}</p>
      <p className="text-lg font-semibold">Author:{author}</p>
      <p className="text-lime-500 text-xl font-bold">Price:${price}</p>
      <p className="text-gray-400 text-lg">Description:{description}</p>

      <div className="text-center">
        <Link href="/">
          <button className="btn btn-primary">Go Home </button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
