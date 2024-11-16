import Container from '@/components/Container'
import { GetData } from '@/Helpers';
import DetailProductImage from '@/components/Products/DetailProductImage'
import React from 'react'
import ProductPrice from '@/components/Products/ProductPrice';

interface Props {
    params: {
        id: string;
    }
}
export default async function ProductDetails({ params }: Props) {
    const { id } = await params;
    console.log('id:', id)

    // Fetch product details using the provided id
    const endpoint = `https://dummyjson.com/products/${id}`;
    const product = await GetData(endpoint)
    console.log('product:', product.images)
    
    return (
        <Container className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* Product Image */}
      <DetailProductImage images={product?.images} />
      {/* Product Details */}
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <div className='flex  justify-between'>
            <ProductPrice product={product}/>
            <h4>{product.rating}</h4>
        </div>
      </div>
      {/* Product Review */}
    </Container>
    )
}
