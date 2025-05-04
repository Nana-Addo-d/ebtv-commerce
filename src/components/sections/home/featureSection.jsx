'use client';

import { useState, useRef, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function FeatureSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [emblaApi, setEmblaApi] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featureItems = [
    {
      src: 'https://picsum.photos/1200/600?random=1',
      alt: 'Placeholder 1',
      title: 'Simply Unique/',
      subtitle: 'Simply Better.',
      description: '3Elegant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.',
    },
    {
      src: 'https://picsum.photos/1200/600?random=2',
      alt: 'Placeholder 2',
      title: 'Inspired Living/',
      subtitle: 'Inspired You.',
      description: 'Exclusive handcrafted furniture with minimalist elegance and timeless comfort.',
    },
    {
      src: 'https://picsum.photos/1200/600?random=3',
      alt: 'Placeholder 3',
      title: 'Crafted Comfort/',
      subtitle: 'Crafted Style.',
      description: 'Beautiful, functional, and sustainable decor items crafted with love and care.',
    },
  ];
  

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Set immediately on mount

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full overflow-hidden bg-background py-10">
      <div className="relative max-w-screen-xl mx-auto px-4">
        
        {/* Carousel Section */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full relative"
          setApi={setEmblaApi}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {featureItems.map((item, index) => (
              <CarouselItem key={index} className="flex justify-center items-center">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={600}
                      className="object-cover w-full h-[500px] rounded-lg"
                      priority
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black hover:bg-gray-100" />
          <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black hover:bg-gray-100" />
        </Carousel>

        {/* Dynamic Text Section Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 border-t border-border pt-8">
          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {featureItems[currentSlide].title} <br /> {featureItems[currentSlide].subtitle}
            </h2>
          </div>

          {/* Description */}
          <div className="text-sm md:text-base text-muted-foreground">
            <p>{featureItems[currentSlide].description}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
