'use client';

import PromoBar from './PromoBar';
import WelcomeBar from './WelcomeBar';
import MainHeader from './MainHeader';
import NavBar from './NavBar';
import { Separator } from '@/components/ui/separator';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background text-foreground border-b border-border shadow-sm transition-colors duration-300">
      {/* Top Layer: Promo Banner */}
      <PromoBar />
      <Separator />
      {/* Second Layer: Welcome message + socials + theme + language/currency */}
      <WelcomeBar />
      <Separator />
      {/* Third Layer: Logo | Search | Icons */}
      <MainHeader />
      <Separator />
      {/* Fourth Layer: All Categories + Mega Menu + Tools */}
      <NavBar />
      <Separator />
    </header>
  );
}
