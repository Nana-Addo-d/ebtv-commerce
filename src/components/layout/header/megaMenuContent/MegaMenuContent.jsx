'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function MegaMenuContent({ categories }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <>
      {/* Column 1: Category list */}
      <div className="flex flex-col gap-1 border-r pr-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            className={`text-left px-3 py-2 rounded-md transition ${
              i === activeIndex
                ? 'bg-muted text-primary font-semibold'
                : 'text-muted-foreground hover:bg-muted'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Column 2: Subcategories */}
      <div className="flex flex-col justify-start gap-3">
        <h3 className="text-xs font-semibold text-muted-foreground">Subcategories</h3>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {active.subcategories.map((sub, idx) => (
            <li key={idx}>
              <Link
                href={`/category/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-primary transition-colors"
              >
                {sub}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Featured items */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xs font-semibold text-muted-foreground">Featured</h3>
        <div className="grid grid-cols-1 gap-2">
          {active.featured.map((item, idx) => (
            <Card key={idx} className="flex items-center gap-3 p-2 hover:shadow-sm transition">
              <Image
                src={item.image}
                alt={item.title}
                width={48}
                height={48}
                className="rounded-md"
              />
              <CardContent className="p-0">
                <p className="text-sm font-medium">{item.title}</p>
                {item.price && <p className="text-xs text-primary">{item.price}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Column 4: Promo */}
      <div className="bg-muted p-4 rounded-md flex flex-col justify-between h-full">
        <div>
          <p className="text-sm font-semibold mb-1">{active.promo.heading}</p>
          <p className="text-xs text-muted-foreground mb-3">{active.promo.description}</p>
          {active.promo.price && (
            <p className="inline-block bg-background text-xs px-2 py-1 rounded mb-2">
              Starting at {active.promo.price}
            </p>
          )}
        </div>

        <div>
          <Image
            src={active.promo.image}
            alt="Promo"
            width={220}
            height={100}
            className="rounded mb-2"
          />
          <Link
            href={active.promo.link}
            className="inline-block bg-primary text-white text-xs font-semibold px-4 py-2 rounded hover:bg-primary/90 transition"
          >
            Shop Now →
          </Link>
        </div>
      </div>
    </>
  );
}
