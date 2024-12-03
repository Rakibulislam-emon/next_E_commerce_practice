import React from 'react'
import Banner from "../components/Hero/Banner"
import { GetData } from '@/Helpers'
import ProductList from '@/components/Products/ProductList';



export default async function page() {
  const endpoint = "https://dummyjson.com/products";
  const {products} = await GetData(endpoint);
  return (
    <div>
      <Banner />
      <ProductList products={products} />
    </div>

  )
}
