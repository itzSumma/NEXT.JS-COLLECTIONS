"use client";

import { StarFill } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const {
    id,
    dish_name,
    image_link,
    category,
    rating,
    price,
    origin_and_popularity,
  } = food;

  return (
    <div className="w-full max-w-3xl mx-auto border border-zinc-200 bg-white rounded-2xl shadow-md overflow-hidden">

      {/* FLEX */}
      <div className="flex flex-col lg:flex-row">

        {/* IMAGE FIX (NO STRETCH) */}
        <div className="relative w-full lg:w-[200px] h-[220px] lg:h-[200px] shrink-0 overflow-hidden">
          <Image
            src={image_link}
            alt={dish_name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 200px"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 p-4">

          <div className="space-y-2">
            <h2 className="text-base lg:text-lg font-bold text-zinc-900">
              {dish_name}
            </h2>

            <p className="text-xs lg:text-sm text-zinc-500">
              {origin_and_popularity}
            </p>

            <h3 className="text-sm lg:text-base text-gray-600 capitalize font-semibold">
              {category}
            </h3>
          </div>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between">

            <div>
              <span className="text-lg lg:text-xl font-bold text-emerald-700">
                ${price}
              </span>

              <div className="flex items-center gap-1">
                <StarFill className="size-4 fill-yellow-400 text-yellow-400" />
                <StarFill className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm lg:text-base font-semibold text-gray-600">
                  {rating}
                </span>
              </div>
            </div>

            <Link href={`/dashboard/food/${id}`}>
              <Button
                size="sm"
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                More Details
              </Button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;