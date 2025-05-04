'use client';

import { useRef, useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

// Utility Function to calculate real countdown
function calculateTimeLeft(targetTimestamp) {
  const now = Date.now();
  const difference = targetTimestamp - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function FlashSalesSection() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const targetTime = useRef(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime.current));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime.current));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      image: 'https://picsum.photos/200/200?random=1',
      price: 120,
      oldPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      image: 'https://picsum.photos/200/200?random=2',
      price: 960,
      oldPrice: 1160,
      discount: 35,
      rating: 4.0,
      reviews: 75,
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      image: 'https://picsum.photos/200/200?random=3',
      price: 370,
      oldPrice: 400,
      discount: 30,
      rating: 5.0,
      reviews: 99,
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      image: 'https://picsum.photos/200/200?random=4',
      price: 375,
      oldPrice: 400,
      discount: 25,
      rating: 4.7,
      reviews: 99,
    },
  ];

  return (
    <section className="w-full py-12 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="rounded-md">Today's</Badge>
            <h2 className="text-2xl font-bold">Flash Sales</h2>
          </div>

          {/* Live Countdown */}
          <div className="flex items-center gap-6 text-center">
            {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
              <div key={idx}>
                <div className="text-2xl font-semibold">
                  {String(timeLeft[unit]).padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <Carousel plugins={[plugin.current]} className="w-full">
          <CarouselContent className="-ml-2">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:basis-1/2 lg:basis-1/4">
                <Card className="relative group overflow-hidden">
                  <Badge variant="destructive" className="absolute top-3 left-3">
                    -{product.discount}%
                  </Badge>

                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                    <Button variant="ghost" size="icon" className="bg-white">
                      <Heart size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-white">
                      <Eye size={16} />
                    </Button>
                  </div>

                  <CardContent className="p-4 flex flex-col items-center justify-center gap-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={180}
                      className="object-contain"
                    />

                    <h3 className="text-sm font-medium text-center">{product.name}</h3>

                    <div className="flex gap-2 items-center">
                      <span className="text-destructive font-bold">${product.price}</span>
                      <span className="line-through text-muted-foreground text-xs">${product.oldPrice}</span>
                    </div>

                    <div className="flex gap-1 text-yellow-400 text-xs">
                      {Array.from({ length: Math.floor(product.rating) }).map((_, idx) => (
                        <Star key={idx} size={16} className="fill-yellow-400" />
                      ))}
                      <span className="text-muted-foreground ml-1">({product.reviews})</span>
                    </div>

                    <Button className="bg-black text-white w-full hidden group-hover:flex">
                      <ShoppingCart size={16} className="mr-2" />
                      Add To Cart
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Button variant="default" size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
