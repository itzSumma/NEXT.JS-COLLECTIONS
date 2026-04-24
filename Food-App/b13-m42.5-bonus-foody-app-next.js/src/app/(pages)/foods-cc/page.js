"use client";

import { useState, useEffect } from "react";
import FoodCard from "@/components/foods/food-card";
import NoFood from "@/components/foods/no-food";

const FoodsCC = () => {
  const [foods, setFoods] = useState([]);

  const [loading, setLoading] = useState(false);

  const [searching, setSearching] = useState("");
  const [category, setCategory] = useState("");

  const [searchingInp, setSearchingInp] = useState("");  
  // 1 one

  const fetchFoods = async (category = "", search = "") => {
    setLoading(true);

    const res = await fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,
    );
    const data = await res.json();
    setFoods(data.data);
    console.log(data, "data");

    setLoading(false);
  };

  useEffect(() => {
    fetchFoods(category, searching);
  }, [searching, category]);

  const handleSearch = () => {
    setSearching(searchingInp);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setCategory(value);
  };

  //   console.log(searchingInp);
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Discover Delicious Foods 🍔
        </h1>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 sticky top-4 z-10 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">
          {/* Search Input */}
          <div className="flex-1">
            <input
              type="text"
              value={searchingInp}
              onChange={(e) => setSearchingInp(e.target.value)}
              placeholder="Search foods... (e.g. burger, pizza)"
              className="w-full px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg placeholder:text-zinc-400"
            />
          </div>

          {/* Search Button */}
          <button
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white rounded-xl font-medium transition"
            onClick={handleSearch}
          >
            Search
          </button>

          {/* Category Select (instant API call) */}
          <select
            className="px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg"
            value={category}
            onChange={handleFilter}
          >
            <option value="">All Categories</option>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverage</option>
            <option value="rice">Rice</option>
            <option value="dish">Dish</option>
          </select>
        </div>

        {/* Results */}
        {loading ? (
          <div className="flex justify-center py-20">
            <p className="text-xl text-zinc-500">Loading delicious foods...</p>
          </div>
        ) : foods.length === 0 ? (
          <NoFood />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodsCC;
