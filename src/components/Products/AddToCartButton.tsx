'use client';

import { twMerge } from "tailwind-merge";
import { ProductType } from "../../../type";

interface AddToCartButtonProps {
  product: ProductType;
}

function AddToCartButton({ product }: AddToCartButtonProps) {
  console.log(product);

  const handleClick = () => {
    alert('Added to cart');
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        "bg-transparent w-full border border-sky-600 text-black rounded-full py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2"
      )}
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
