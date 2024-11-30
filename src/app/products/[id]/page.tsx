import React from 'react';
import Container from '@/components/Container';
import { GetData } from '@/Helpers';
import DetailProductImage from '@/components/Products/DetailProductImage';
import ProductPrice from '@/components/Products/ProductPrice';
import { FaRegEye } from 'react-icons/fa';
import AddToCartButton from '@/components/Products/AddToCartButton';
import { ProductType } from '../../../../type';
import Image from 'next/image';
import { paymentImage } from '@/assets';



export default async function ProductDetails({params}:{params:Promise<{id:string}>}) {
    const id = (await params).id;
    console.log('id:', id)

    // Fetch product details using the provided id
    const endpoint = `https://dummyjson.com/products/${id}`;
    const product: ProductType = await GetData(endpoint);
    if (!product) {
        return <div>Error loading product details. Please try again later.</div>;
    }

    const savingPrice = (product.discountPercentage * product.price) / 100;

    return (
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <DetailProductImage images={product.images} />

            {/* Product Details */}
            <div>
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <div className="flex justify-between">
                    <ProductPrice product={product} />
                    <h4 className="font-semibold">({product.rating} reviews)</h4>
                </div>
                <div className="mt-4 font-medium flex flex-col gap-y-4">
                    <span className="flex items-center gap-x-2 mb-2">
                        <FaRegEye />
                        250+ people are viewing this right now
                    </span>
                    <h3 className="font-semibold">
                        You are saving{' '}
                        <span className="text-green-400">
                            $ {savingPrice.toFixed(2)}
                        </span>{' '}
                        upon purchase
                    </h3>
                    <h3>{product.description}</h3>
                    <h3>Brand: {product.brand}</h3>
                    <h3>Category: {product.category}</h3>
                    <span className="flex gap-x-2 items-center">
                        Tags:{' '}
                        {product.tags.map((tag, index) => (
                            <span key={index}>
                                {tag}
                                {index < product.tags.length - 1 && ', '}
                            </span>
                        ))}
                    </span>
                    <AddToCartButton product={product} />
                </div>
                <div className='mt-4 bg-[#f7f7f7] flex flex-col items-center gap-y-2 rounded-lg mb-4 pt-2'>
                    <Image src={paymentImage} className='object-cover w-auto' alt='paymentImage' />
                    <p className='font-bold mt-2'>
                        Guaranteed safe & secure checkout
                    </p>
                </div>
            </div>
        </Container>
    );
}
