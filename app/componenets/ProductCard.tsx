import React from "react";

interface props {
  title: string;
  price: number;
}
const ProductCard = ({ title, price }: props) => {
  return (
    <div className="bg-white p-4 rounded-md font-medium ">
      <h1 className="text-black">{title}</h1>
      <p className="text-gray-400">{price}$</p>
    </div>
  );
};

export default ProductCard;
