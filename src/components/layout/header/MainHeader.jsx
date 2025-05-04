'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, User, Search, Heart } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function MainHeader() {
  // TODO: Replace later with dynamic cart logic
  const [cartCount] = useState(2);
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  // TODO: Replace with real search logic
  const results = [
    { title: 'Zulu Beaded Necklace', href: '/products/zulu-beaded-necklace' },
    { title: 'Handwoven Basket', href: '/products/handwoven-basket' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full border-b border-border bg-background text-foreground">
    <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between gap-6">
  
        {/* Left: Logo using Avatar */}
        <Link href="/" className="flex items-center">
          <Avatar >
          <AvatarImage src="https://github.com/shadcn.png" alt="Everything Beaded Logo" />
            <AvatarFallback>EB</AvatarFallback>
          </Avatar>
        </Link>
        
        

        {/* Center: Search */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-auto relative">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex w-full items-center gap-2 px-4 py-2 border rounded-md bg-muted text-muted-foreground hover:border-primary transition-colors cursor-text">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Search for anything…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-full mt-2 p-2 text-sm">
              {query.length > 1 ? (
                <ul className="space-y-2">
                  {results
                    .filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
                    .map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 rounded-md hover:bg-muted"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">Type at least 2 characters to search…</p>
              )}
            </PopoverContent>
          </Popover>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5 text-muted-foreground">
          
          {/* Wishlist */}
          <Link href="/wishlist" aria-label="Wishlist" className="hover:text-primary transition">
            <Heart size={20} />
          </Link>

          {/* Cart with badge */}
          <Popover>
            <PopoverTrigger asChild>
              <button
                className="relative hover:text-primary transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -top-2 -right-2 h-5 w-5 text-xs flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </Badge>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-4">
              <p className="text-sm text-muted-foreground">Cart preview goes here...</p>
            </PopoverContent>
          </Popover>

          {/* User/Login */}
          <Link href="/account" aria-label="User Account" className="hover:text-primary transition">
            <User size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
