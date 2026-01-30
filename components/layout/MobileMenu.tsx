'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNavLinks, moreNavLinks } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const allLinks = [...mainNavLinks, ...moreNavLinks];

  return (
    <div className={cn('fixed inset-0 z-40 lg:hidden transition-all duration-500', isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
      <div className="absolute inset-0 bg-gradient-to-br from-lake-950 via-lake-900 to-lake-800" />
      <div className="relative h-full flex flex-col justify-center px-8">
        <nav className="space-y-1">
          {allLinks.map((link, i) => (
            <Link key={link.href} href={link.href} onClick={onClose} className={cn('block text-3xl font-display font-bold text-white/90 hover:text-white py-3 transition-all duration-300', isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0')} style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10">
          <Link href="/donate" onClick={onClose} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink to-pink-light text-white font-bold text-lg">
            <Heart size={20} /> Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
}
