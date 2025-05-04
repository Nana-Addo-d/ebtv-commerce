'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { categories } from '@/data/categoryData';
import MegaMenuContent from './megaMenuContent/MegaMenuContent';

import {
  Headphones,
  HelpCircle,
  PhoneCall,
  RefreshCcw,
  LocateIcon,
} from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="w-full border-b border-border bg-background text-foreground text-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">

            {/* All Category - Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-muted px-3 py-1.5 rounded-md flex items-center gap-1 hover:bg-accent transition-colors">
                All Category 
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-6 shadow-xl rounded-lg bg-background w-[1100px] grid grid-cols-[200px_1fr_1fr_260px] gap-6 border border-border">
                <MegaMenuContent categories={categories} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Track Order */}
            <NavigationMenuItem>
              <Link href="/account/orders/track-order" className="flex items-center gap-1 hover:text-primary transition-colors">
                <LocateIcon size={14} /> Track Order
              </Link>
            </NavigationMenuItem>

            {/* Compare */}
            <NavigationMenuItem>
              <Link href="/compare" className="flex items-center gap-1 hover:text-primary transition-colors">
                <RefreshCcw size={14} /> Compare
              </Link>
            </NavigationMenuItem>

            {/* Customer Support */}
            <NavigationMenuItem>
              <Link href="/support" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Headphones size={14} /> Customer Support
              </Link>
            </NavigationMenuItem>

            {/* Need Help */}
            <NavigationMenuItem>
              <Link href="/help" className="flex items-center gap-1 hover:text-primary transition-colors">
                <HelpCircle size={14} /> Need Help
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Phone Number */}
        <div className="flex items-center text-xs gap-2 text-muted-foreground hover:text-primary transition-colors">
          <PhoneCall size={14} />
          <span>+1-202-555-0104</span>
        </div>
      </div>
    </nav>
  );
}
