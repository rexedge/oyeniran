'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const allImages = [
  {
    id: 1,
    src: 'https://placebear.com/g/600/400',
    alt: 'Macbook Mockup',
    category: 'Technology',
  },
  {
    id: 2,
    src: 'https://placebear.com/g/600/400',
    alt: 'iPhone Mockup',
    category: 'Mobile',
  },
  {
    id: 3,
    src: 'https://placebear.com/g/600/400',
    alt: 'iPad Mockup',
    category: 'Tablet',
  },
  {
    id: 4,
    src: 'https://placebear.com/g/600/400',
    alt: 'Angled iPhone Mockup',
    category: 'Mobile',
  },
  {
    id: 5,
    src: 'https://placebear.com/g/600/400',
    alt: 'Macbook on Desk Mockup',
    category: 'Technology',
  },
  {
    id: 6,
    src: 'https://placebear.com/g/600/400',
    alt: 'iPad Pro Landscape Mockup',
    category: 'Tablet',
  },
  {
    id: 7,
    src: 'https://placebear.com/g/600/400',
    alt: 'iPhone 11 Pro Mockup',
    category: 'Mobile',
  },
  {
    id: 8,
    src: 'https://placebear.com/g/600/400',
    alt: 'Macbook Side View Mockup',
    category: 'Technology',
  },
  {
    id: 9,
    src: 'https://placebear.com/g/600/400',
    alt: 'iPad Pro Portrait Mockup',
    category: 'Tablet',
  },
];

const categories = ['All', 'Technology', 'Mobile', 'Tablet'];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<IIMAGE | null>(null);
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasMore) {
      loadMoreImages();
    }
  }, [inView, hasMore]);

  useEffect(() => {
    filterImages();
  }, [searchTerm, selectedCategory]);

  const loadMoreImages = () => {
    const currentLength = visibleImages.length;
    const moreImages = allImages.slice(currentLength, currentLength + 3);
    if (moreImages.length > 0) {
      setVisibleImages([...visibleImages, ...moreImages]);
    }
    if (currentLength + moreImages.length >= allImages.length) {
      setHasMore(false);
    }
  };

  const filterImages = () => {
    let filteredImages = allImages;
    if (selectedCategory !== 'All') {
      filteredImages = filteredImages.filter(
        (img) => img.category === selectedCategory,
      );
    }
    if (searchTerm) {
      filteredImages = filteredImages.filter(
        (img) =>
          img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          img.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    setVisibleImages(filteredImages.slice(0, 6));
    setHasMore(filteredImages.length > 6);
  };

  const openPreview = (image: IIMAGE) => {
    setSelectedImage(image);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {visibleImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold truncate">
                    {image.alt}
                  </h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openPreview(image)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <div ref={ref} className="flex justify-center mt-8">
          <Button onClick={loadMoreImages} variant="outline">
            Load More
          </Button>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="object-contain w-full h-full"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-2 right-2 bg-white bg-opacity-50 hover:bg-opacity-100"
                onClick={closePreview}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-semibold mb-1">
                  {selectedImage.alt}
                </h3>
                <p className="text-white text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
