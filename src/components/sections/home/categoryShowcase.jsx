'use client';

import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';

const categories = [
  { name: 'Puffers', image: 'https://picsum.photos/600/800?random=10' },
  { name: 'Bombers', image: 'https://picsum.photos/600/800?random=9' },
  { name: 'Lightweight Jackets', image: 'https://picsum.photos/600/800?random=8' },
  { name: 'Gilets', image: 'https://picsum.photos/600/800?random=7' },
  { name: 'Coats', image: 'https://picsum.photos/600/800?random=6' },
  { name: 'Rainwear', image: 'https://picsum.photos/600/800?random=5' },
];

const Skeleton = ({ src }) => (
    <motion.div
      initial={{ opacity: 0.8 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full overflow-hidden rounded-xl"
    >
      <img
        src={src}
        alt="Featured Category"
        className="w-full h-full object-cover rounded-xl"
      />
    </motion.div>
  );

const items = [
  {
    title: 'Men’s Fall Collection',
    description: 'Warm styles for cooler weather',
    header: <Skeleton src="https://picsum.photos/600/800?random=1" />,
    className: 'md:col-span-2',
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Luxury Cashmere',
    description: 'Ultra-soft essentials for winter',
    header: <Skeleton src="https://picsum.photos/600/800?random=2" />,
    className: 'md:col-span-1',
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Nordic Minimalism',
    description: 'Elegant, clean and warm silhouettes',
    header: <Skeleton src="https://picsum.photos/600/800?random=3" />,
    className: 'md:col-span-1',
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Genuine Leather Wear',
    description: 'Classic timeless jackets and bags',
    header: <Skeleton src="https://picsum.photos/600/800?random=4" />,
    className: 'md:col-span-2',
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Rainwear Ready',
    description: 'Stylish coverage for wet days',
    header: <Skeleton src="https://picsum.photos/600/800?random=5" />,
    className: 'md:col-span-1',
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


export default function CategoryShowcase() {
    const [visibleRows, setVisibleRows] = useState(2);
    const router = useRouter();
  
    const handleViewMore = () => {
      if (visibleRows === 2) {
        setVisibleRows(3);
      } else if (visibleRows === 3) {
        router.push('/featured-categories');
      }
    };
  
    const visibleItems = items.slice(0, visibleRows * 2);
  
    return (
      <section className="w-full py-12 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Shop by Categories
          </h2>
  
          {/* Category Circles Carousel */}
          <div className="flex justify-center">
            <Carousel className="max-w-2xl w-full">
              <CarouselContent className="justify-center">
                {categories.map((cat, idx) => (
                  <CarouselItem key={idx} className="basis-auto">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-16 w-16 border">
                        <AvatarImage src={cat.image} alt={cat.name} />
                        <AvatarFallback>{cat.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium text-center whitespace-nowrap">{cat.name}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
  
          {/* Animated Bento Grid Section */}
          <div className="mt-10">
            <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
              {visibleItems.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={cn('[&>p:text-lg]', item.className)}
                  icon={item.icon}
                />
              ))}
            </BentoGrid>
            {visibleRows < 4 && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleViewMore}
                  className="text-sm px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
                >
                  {visibleRows < 3 ? 'View More' : 'Explore All Categories'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }