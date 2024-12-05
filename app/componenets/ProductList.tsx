import ProductCard from "./ProductCard";

export default async function ProductList() {
  const productRes = await fetch("https://fakestoreapi.com/products");
  const productData = await productRes.json();

  if (!productData) return <h1>no product found...</h1>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {productData.map((product: any) => {
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
