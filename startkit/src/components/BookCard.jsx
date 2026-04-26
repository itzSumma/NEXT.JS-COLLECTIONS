import { Button, Card } from "@heroui/react";
import Image from "next/image";

const books = [
  {
    bookId: 1,
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 192,
    rating: 4.5,
    category: "Classic",
    tags: ["Fiction", "Romance"],
    publisher: "Scribner",
    yearOfPublishing: 1925,
  },
  {
    bookId: 2,
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 281,
    rating: 4.8,
    category: "Fiction",
    tags: ["Drama", "Social Justice"],
    publisher: "J.B. Lippincott & Co.",
    yearOfPublishing: 1960,
  },
  {
    bookId: 3,
    bookName: "1984",
    author: "George Orwell",
    image: "https://i.ibb.co.com/MprDyVt/51-BIA4rrae-L-AC-UF1000-1000-QL80.jpg",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 328,
    rating: 4.6,
    category: "Fiction",
    tags: ["Dystopian", "Political"],
    publisher: "Secker & Warburg",
    yearOfPublishing: 1949,
  },
  {
    bookId: 4,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 224,
    rating: 4.3,
    category: "Fiction",
    tags: ["Young Adult", "Identity"],
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
  },
  {
    bookId: 5,
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 279,
    rating: 4.7,
    category: "Classic",
    tags: ["Romance", "Satire"],
    publisher: "T. Egerton, Whitehall",
    yearOfPublishing: 1813,
  },
  {
    bookId: 6,
    bookName: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 310,
    rating: 4.9,
    category: "Fantasy",
    tags: ["Adventure", "Epic"],
    publisher: "Allen & Unwin",
    yearOfPublishing: 1937,
  },
  {
    bookId: 7,
    bookName: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "https://i.ibb.co.com/989qMRW/42844155.jpg",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 309,
    rating: 4.8,
    category: "Fantasy",
    tags: ["Magic", "Young Adult"],
    publisher: "Bloomsbury",
    yearOfPublishing: 1997,
  },
  {
    bookId: 8,
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://i.ibb.co.com/zS9jsdK/18144590.jpg",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 177,
    rating: 4.6,
    category: "Fiction",
    tags: ["Philosophical", "Adventure"],
    publisher: "HarperCollins",
    yearOfPublishing: 1988,
  },
  {
    bookId: 9,
    bookName: "The Girl on the Train",
    author: "Paula Hawkins",
    image: "https://i.ibb.co.com/P6hfCmJ/Whats-App-Image-2024-05-22-at-11-21-25-2e21ae46.jpg",
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    totalPages: 316,
    rating: 4.2,
    category: "Mystery",
    tags: ["Suspense", "Psychological"],
    publisher: "Riverhead Books",
    yearOfPublishing: 2015,
  },
];

const BookCard = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <Card
  key={book.bookId}
  className="w-full bg-white dark:bg-zinc-800
hover:bg-gradient-to-br hover:from-emerald-200 hover:via-teal-50 hover:to-green-100
dark:hover:from-emerald-900 dark:hover:via-teal-900 dark:hover:to-zinc-900
transition-all duration-300
hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(13,151,105,0.2)]
border border-gray-200 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-500"
>
  {/* IMAGE — aspect ratio fix */}
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
    <Image
      src={book.image}
      alt={book.bookName}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover"
    />
  </div>

  {/* CONTENT */}
  <div className="flex flex-col gap-2 p-3">
    <Card.Header className="p-0">
      <Card.Title className="text-base font-bold line-clamp-1">
        {book.bookName}
      </Card.Title>
      <Card.Description className="text-sm text-gray-500">
        {book.author}
      </Card.Description>
    </Card.Header>

    <div className="text-sm">
      <p>
        <span className="font-semibold">Category:</span>{" "}
        {book.category}
      </p>
      <p>
        <span className="font-semibold">Tags:</span>{" "}
        {book.tags.join(", ")}
      </p>
      <p>
        <span className="font-semibold">Publisher:</span>{" "}
        {book.publisher}
      </p>
      <p>Pages: {book.totalPages}</p>
      <p>
        ⭐ <span className="font-semibold">{book.rating}</span>
      </p>
    </div>

    <Button
      size="sm"
      className="bg-emerald-800 text-white hover:bg-emerald-900"
    >
      Details
    </Button>
  </div>
</Card>
        ))}
      </div>
    </div>
  );
};

export default BookCard;