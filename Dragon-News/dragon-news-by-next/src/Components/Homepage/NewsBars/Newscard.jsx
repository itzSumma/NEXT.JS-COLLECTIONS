import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const Newscard = ({ news }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">

      <div className="card-body">

        {/* AUTHOR */}
        <div className="flex items-center justify-between bg-zinc-100 p-2 rounded-md">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300 relative">
              {news?.author?.img && (
                <Image
                  src={news.author.img}
                  alt="author"
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div>
              <h2 className="text-sm font-medium">
                {news?.author?.name || "Unknown"}
              </h2>
              <p className="text-xs text-gray-500">
                {news?.author?.published_date}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500 text-lg" />
            <FaShareAlt className="text-gray-600 text-lg cursor-pointer" />
          </div>

        </div>

        {/* TITLE */}
        <h2 className="card-title mt-3">
          {news?.title}
        </h2>

        {/* IMAGE */}
        <figure className="relative w-full h-60 mt-3">
          <Image
            src={news?.image_url}
            alt={news?.title || "news image"}
            fill
            className="object-cover"
            unoptimized
          />
        </figure>

        {/* DESCRIPTION */}
        <p className="text-md text-gray-600 line-clamp-3 mt-3">
          {news?.details}
        </p>
 <div className="flex items-center justify-between mt-3">

 <div className="flex gap-2 text-lg font-medium items-center">
<p className="flex items-center gap-1"> <FaStar className="text-yellow-500"/>{news.rating.number}</p>
<p className="flex items-center gap-1"> <FaEye className="text-blue-500" />{news.total_view}</p>

 </div>

  <Link href={`/news/${news._id}`}>
    <button className="btn hover:bg-indigo-400 hover:text-white rounded-lg">
      More Details
    </button>
  </Link>

</div> 
      </div>
    </div>
  );
};

export default Newscard;