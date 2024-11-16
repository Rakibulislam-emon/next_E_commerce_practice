import React from 'react'
import { ProductType } from '../../../type';
import PriceFormate from './PriceFormate';

function ProductPrice({product}:{product:ProductType}) {
    const regularPrice = product?.price;
  const discountedPrice = product?.price + product?.discountPercentage / 100;
  return (
    <div className='flex gap-x-2'>
        <PriceFormate amount={regularPrice} className='font-semibold text-sky-600' />
        <PriceFormate amount={discountedPrice} className="text-gray-500 line-through font-normal" />
    </div>
  )
}

export default ProductPrice