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
    <div
      className="
        w-full max-w-3xl mx-auto
        border border-zinc-200 dark:border-zinc-700
        bg-white dark:bg-zinc-900
        rounded-2xl shadow-sm
        overflow-hidden
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      "
    >
      <div className="flex flex-col lg:flex-row">

        {/* IMAGE */}
        <div className="relative w-full lg:w-[200px] h-[220px] lg:h-[200px] overflow-hidden">
          <Image
            src={image_link}
            alt={dish_name}
            fill
            className="
              object-cover
              transition-transform duration-300
              hover:scale-110
            "
            sizes="(max-width: 1024px) 100vw, 200px"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 p-4">

          <h2 className="text-base lg:text-lg font-bold text-zinc-900 dark:text-white">
            {dish_name}
          </h2>

          <p className="text-xs lg:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {origin_and_popularity}
          </p>

          <h3 className="text-sm lg:text-base font-semibold text-zinc-600 dark:text-zinc-300 capitalize mt-1">
            {category}
          </h3>

          {/* FOOTER */}
          <div className="mt-4 flex items-center justify-between">

            <div>
              <span className="text-lg font-bold text-emerald-600">
                ${price}
              </span>

              <div className="flex items-center gap-1 mt-1">
                <StarFill className="size-4 fill-yellow-400 text-yellow-400" />
                <StarFill className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                  {rating}
                </span>
              </div>
            </div>

            <Link href={`/dashboard/food/${id}`}>
              <Button
                size="sm"
                className="
                  bg-emerald-600 text-white
                  hover:bg-emerald-700
                  transition
                "
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