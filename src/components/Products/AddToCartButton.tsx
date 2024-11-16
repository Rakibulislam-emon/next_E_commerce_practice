'use client'

import { twMerge } from "tailwind-merge"

function AddToCartButton() {

  const handleClick = () => {
    alert('hello');
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge("bg-transparent w-full border border-sky-600 text-black rounded-full py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2")}
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;