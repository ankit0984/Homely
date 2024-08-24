import React from 'react'
import Image from 'next/image'
import {galleryData} from '../data/data'

const GalleryColumn = ({ images }) => (
  <div className="flex flex-col gap-4">
    {images.map((src, index) => (
      <div key={index}>
        <Image
          src={src}
          alt={`Gallery image ${index + 1}`}
          width={500}
          height={500}
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
        />
      </div>
    ))}
  </div>
)

export default function Gallery() {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {galleryData.map((column, index) => (
        <GalleryColumn key={index} images={column} />
      ))}
    </div>
  )
}
