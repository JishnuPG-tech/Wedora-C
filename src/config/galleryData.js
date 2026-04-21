// Images are served from the /public/gallery/ folder as static assets.
// This avoids Vite bundling/hashing issues and works reliably on Vercel.
export const galleryPhotos = [
  { src: '/gallery/photo1.jpg', alt: 'Church steps', span: 'tall' },
  { src: '/gallery/photo2.jpg', alt: 'Garden walk', span: 'wide' },
  { src: '/gallery/photo3.jpg', alt: 'Laughing together', span: 'tall' },
  { src: '/gallery/photo4.jpg', alt: 'Sunset beach', span: 'wide' },
  { src: '/gallery/photo5.jpg', alt: 'Flower courtyard', span: 'square' },
  { src: '/gallery/photo6.jpg', alt: 'Church interior', span: 'tall' },
];