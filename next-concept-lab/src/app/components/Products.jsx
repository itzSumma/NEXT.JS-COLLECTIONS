const Products = ({ product }) => {
  if (!product) return null;

  const { name, price, category, stock, rating, description } = product;

  return (
    <div className="card  bg-base-200 shadow-md border border-indigo-600">
      <div className="card-body">
        <h2 className="card-title text-xl text-blue-500">{name}</h2>

        <p className="text-zinc-400">{description}</p>

        <p className="font-bold text-2xl">${price?.toFixed(2)}</p>

        <p className="font-semibold">Category: {category}</p>

        <div className="flex justify-between text-lime-200 text-lg">
          <p>Stock: {stock}</p>
          <p>Rating: {rating}</p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-info hover:bg-indigo-600">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;