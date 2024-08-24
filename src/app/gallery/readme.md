# This refactored version offers several improvements:
```javascript
// code:- 
import React from 'react'

const galleryData = [
  [
    "/assets/image/bedroom.jpg",
    "/assets/image/gallery2.jpg",
    "/assets/image/gallery.jpg",
  ],
  [
    "/assets/image/swiper1.jpg",
    "/assets/image/gallery11.jpg",
    "/assets/image/living.jpg",
  ],
  [
    "/assets/image/gallery14.jpg",
    "/assets/image/gallery15.jpg",
    "/assets/image/gallery12.jpg",
  ],
  [
    "/assets/image/gallery7.jpg",
    "/assets/image/gallery11.jpg",
    "/assets/image/gallery3.jpg",
  ],
]

const GalleryColumn = ({ images }) => (
  <div className="flex flex-col gap-4">
    {images.map((src, index) => (
      <div key={index}>
        <img
          src={src}
          alt={`Gallery image ${index + 1}`}
          className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
        />
      </div>
    ))}
  </div>
)

export default function Gallery() {
  return (
    <div className='container py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      {galleryData.map((column, index) => (
        <GalleryColumn key={index} images={column} />
      ))}
    </div>
  )
}
```
1. Data Separation: The image URLs are now stored in a separate `galleryData` array, making it easier to update or manage the gallery content.
2. Reusable Component: I've created a `GalleryColumn` component that renders a column of images. This reduces repetition in the code.
3. Dynamic Rendering: The main `Gallery` component now maps over the `galleryData` to render each column, making it more flexible and easier to add or remove columns.
4. Improved Accessibility: I've added `alt` attributes to the images with generic descriptions. You may want to replace these with more specific descriptions for each image.
5. Fixed Typo: Changed `hove:scale-90` to `hover:scale-90` in the image class names.
6. Renamed Function: Changed `page` to `Gallery` to better reflect its purpose and follow React component naming conventions.

* This structure allows for easier maintenance and updates to the gallery. If you need to add or remove images, you can simply modify the `galleryData` array. The component will automatically adjust to render the new data.