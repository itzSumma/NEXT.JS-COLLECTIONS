import Products from "../components/Products";

export const metadata = {
  title: 'Products Page',
  description: 'Here you can find all the products',
}
const getProducts = async () => {
    const res = await fetch ("http://localhost:5000/products",{next:{revalidate:10}});
    return res.json();
}
const ProductsPage = async() => {
    const products =await getProducts();
    return (
        <div className="p-10 max-w-6xl mx-auto">
            <h2 className="text-center text-3xl font-bold mb-5">Our Products:{products.length}</h2>
            
           <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
        </div>
    );
};

export default ProductsPage;