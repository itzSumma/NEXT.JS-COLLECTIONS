"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  const router = useRouter();

  if (!book) return null;

  const { title, author, price, category, rating, image, description } = book;

  return (
    <div>
      <div className="card bg-primary text-primary-content border border-amber-400">
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <p className="text-zinc-300">{description}</p>

          <p className="font-bold text-2xl text-yellow-500">${price}</p>
          <p className="font-semibold">Category: {category}</p>
          <p>Author: {author}</p>

          <div className="flex justify-between text-orange-500 text-lg">
            <p>Rating: {rating}</p>
          </div>

          <Image src={image} alt={title} width={200} height={200} />

          <div className="card-actions justify-between">
            <button className="btn btn-neutral" onClick={() => router.back()}>
              Back
            </button>

            
          <Link href={`/books/${book.id}`} className="btn btn-outline">
            Book Details
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;