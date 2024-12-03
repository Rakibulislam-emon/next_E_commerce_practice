"use client"
import React, { useEffect, useState } from 'react'
import { ProductType, StateType } from '../../../type';
import PriceFormate from './PriceFormate';
import { useSelector } from 'react-redux';

function ProductPrice({ product }: { product: ProductType }) {
  const { cart } = useSelector((state: StateType) => state.shofy);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(null)
 
  useEffect(() => {
    const availableProduct = cart?.find((item) => item.id === product.id)
    if (availableProduct) {
      setExistingProduct(availableProduct)
    }
  }, [cart, product]);
  const regularPrice = product?.price;
  const discountedPrice = product?.price + product?.discountPercentage / 100;
  return (
    <div className='flex gap-x-2'>
      <PriceFormate amount={existingProduct? existingProduct.quantity! * regularPrice : regularPrice} className='font-semibold text-sky-600' />
      <PriceFormate amount={existingProduct? existingProduct.quantity! * discountedPrice : discountedPrice} className="text-gray-500 line-through font-normal" />
    </div>
  )
}

export default ProductPrice