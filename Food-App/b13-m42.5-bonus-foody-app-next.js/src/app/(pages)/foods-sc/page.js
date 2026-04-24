import CategoryFilter from "@/components/foods/category-filter";
import FoodCard from "@/components/foods/food-card";
import NoFood from "@/components/foods/no-food";
import SearchFood from "@/components/foods/search-food";

const getFoods = async (category = "", search = "") => {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`,
  );
  const data = await res.json();
  return data.data;
};

const FoodsPage = async ({ searchParams }) => {
  const sp = await searchParams;
  console.log(sp, "sp");

  const foods = await getFoods(sp.category, sp.search);
  console.log(foods, "foods");

  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-4xl">Foods</h1>
      <div className="">
        <SearchFood />
        <CategoryFilter />
      </div>

      {/* {sp.search && (
        <div className="mt-5">
          Found <span className="font-bold text-red-500">{foods.length}</span>{" "}
          result with the term{" "}
          <span className="font-bold italic text-red-500">{sp.search}</span>
        </div>
      )} */}

      {foods.length === 0 ? (
        <NoFood />
      ) : (
        <div className="grid grid-cols-4 mt-10 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodsPage;
