import Image from "next/image";
import React from "react";
import { FaShareAlt, FaStar } from "react-icons/fa";

const Newscard = ({ news }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      
      <div className="card-body">
        
        {/* Author Info */}
        <div className="flex items-center justify-between bg-zinc-100 p-2 rounded-md">

          <div className="flex items-center gap-3">
            
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300 relative">
              {news?.author?.img && (
                <Image
                  src={news.author.img}
                  alt={news?.author?.name || "author"}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Text */}
            <div>
              <h2 className="text-sm font-medium">
                {news?.author?.name || "Unknown"}
              </h2>
              <p className="text-xs text-gray-500">
                {news?.author?.published_date}
              </p>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500 text-lg" />
            <FaShareAlt className="text-gray-600 text-lg cursor-pointer" />
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title mt-3">
          {news?.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600">
          {news?.details?.slice(0, 120) || "No description available"}...
        </p>
      </div>

      {/* Image */}
      <figure className="relative w-full h-60">
        <Image
          src={news?.image_url}
          alt={news?.title || "news image"}
          fill
          className="object-cover"
          unoptimized
        />
      </figure>
    </div>
  );
};

export default Newscard;