"use client"
import { addToFavorite } from '@/redux/shofySlice'; // Only need addToFavorite now
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { LuEye } from 'react-icons/lu';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ProductType, StateType } from '../../../type';
import toast from 'react-hot-toast';

function SideBar({ product }: { product: ProductType }) {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state: StateType) => state.shofy);

  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the product is already in the favorite list
  useEffect(() => {
    const productInFavorite = favorite.some((item: { id: number }) => item.id === product.id);
    setIsFavorite(productInFavorite); // Update state based on whether product is in favorite
  }, [favorite, product]);

  const handleToggleFavorite = () => {
    dispatch(addToFavorite(product)); // Dispatch the product object for adding/removing

    if (isFavorite) {
      toast.success('Removed from favorites');
    } else {
      toast.success('Added to favorites');
    }
    setIsFavorite(!isFavorite); // Toggle the state after the click
  };

  return (
    <div className='absolute right-2 bottom-44 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40'>
      <button className='p-2 hover:bg-sky-600 hover:text-white duration-200'>
        <FiShoppingCart />
      </button>
      <button className='p-2 hover:bg-sky-600 hover:text-white border-y border-y-borderColor duration-200'>
        <LuEye />
      </button>

      <button
        onClick={handleToggleFavorite} // Toggle favorite on click
        className='p-2 hover:bg-sky-600 hover:text-white duration-200'>
        {
          isFavorite ? <MdFavorite className='text-red-500' /> : <MdFavoriteBorder />
        }
      </button>
    </div>
  );
}

export default SideBar;
