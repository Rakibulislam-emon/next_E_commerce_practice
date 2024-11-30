import React from 'react'
import { ProductType } from '../../../type'
import ProductPrice from './ProductPrice'
import AddToCartButton from './AddToCartButton'
import SideBar from './SidebarOfImage'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsCard({products}:{products : ProductType}) {
  return (
    <div className='border border-gray-400 hover:shadow-lg overflow-hidden hover:shadow-black/30 duration-200 rounded-md group relative'>
    <Link href={
      {
        pathname: `/products/${products?.id}`,
        query:{id:products?.id}
      }
    }>
      
    <Image src={products?.images[0]} alt='products-img' width={500} height={500} priority={true} className='w-full h-64 object-contain hover:scale-110' />
    <p className='text-xs absolute top-2 right-2 bg-red-500 px-2 py-1 rounded-xl text-white'>{products.discountPercentage}%</p>
    </Link>
    {/* side Bar Section*/}
    <SideBar />
    {/* description */}
    <div className='border-t border-t-borderColor py-2 px-4 flex flex-col justify-between h-40'>
    <div>
      <p className='text-sm font-medium text-lightText capitalize'>{products?.category}</p>
      <h2 className='font-semibold text-base line-clamp-2'>{products?.title}</h2>
      {/* Product Price*/}
      <ProductPrice product={products} />
      {/* Product Add Too Cart*/}
      <AddToCartButton product={products} />
    </div>
    </div>
  </div>
  )
}
