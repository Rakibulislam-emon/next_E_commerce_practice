'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  images: string[];
}

function DetailProductImage({ images }: Props) {
  // Ensure there's at least one image to avoid runtime errors
  const [currentImage, setCurrentImage] = useState(images[0] || '');

  if (!images || images.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <div className='flex'>
      {/* Small Images */}
      <div className='flex flex-col'>
        {images.map((item, index) => (
          <div key={index}>
            <Image
              src={item} // Correctly use each item in the array
              alt={`Product Image ${index + 1}`}
              width={200}
              height={200}
              className='w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 duration-200 border border-gray-200 mb-1 p-1'
              onClick={() => setCurrentImage(item)} // Update currentImage on click
            />
          </div>
        ))}
      </div>

      {/* Main Large Image */}
      <div className='bg-gray-100 rounded-md ml-5 w-full max-h-[550px]'>
        <Image
          priority={true}
          src={currentImage} // Use currentImage for the large image
          alt="Main Product Image"
          width={500}
          height={500}
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  );
}

export default DetailProductImage;