'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { socials } from '@/data/socialsData';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent
} from '@/components/ui/tooltip';

import {
  Moon,
  Sun,
  Globe2,
  ChevronDown
} from 'lucide-react';

export default function WelcomeBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-primary-foreground text-muted-foreground text-xs">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between gap-6">

        {/* Left: Welcome text */}
        <div className="text-xs font-medium">
          Welcome to Everything Beaded online eCommerce store.
        </div>

        {/* Right: Social icons, Language/Currency, Theme */}
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
          <h5 className="text-s font-semibold">Follow Us:</h5>
          <TooltipProvider>
            {socials.map((social, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon size={16} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>

          {/* Separator after social icons */}
          <Separator
  orientation="vertical"
  className="h-5 bg-border sm:inline-block"
/>


          {/* Language / Currency */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-xs font-medium hover:text-primary transition-colors">
              <Globe2 size={14} />
              Eng / USD
              <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="text-xs">
              <DropdownMenuItem>English / USD</DropdownMenuItem>
              <DropdownMenuItem>Deutsch / EUR</DropdownMenuItem>
              <DropdownMenuItem>Français / EUR</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Separator after language selector */}
          <Separator
  orientation="vertical"
  className="h-5  bg-border opacity-50 hidden sm:inline-block"
/>


          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
