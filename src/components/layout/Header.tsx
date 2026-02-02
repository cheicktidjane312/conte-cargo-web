// src/components/layout/Header.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Icônes pour le menu mobile

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        
        {/* 1. LOGO */}
        <Link href="/">
          <div className="relative w-32 h-14 md:w-40 md:h-16 cursor-pointer">
            <Image 
              src="/images/logo.jpeg" 
              alt="Conte Cargo Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* 2. MENU ORDINATEUR (Desktop) */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-conte-blue">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="hover:text-conte-orange transition-colors relative group"
            >
              {item.name}
              {/* Petite ligne animée au survol */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-conte-orange transition-all group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* LE BOUTON DEVIS (Bien visible) */}
          <Link href="/devis" className="bg-conte-orange text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-transform hover:scale-105 shadow-lg flex items-center gap-2">
            <span>Demander un Devis</span>
            <span className="bg-white/20 rounded-full px-2 text-xs">Gratuit</span>
          </Link>
        </nav>

        {/* 3. BOUTON BURGER (Mobile) */}
        <button 
          className="md:hidden text-conte-blue p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* 4. MENU MOBILE DÉROULANT */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-6 space-y-4 animate-in slide-in-from-top-5">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-lg font-medium text-gray-800 hover:text-conte-orange py-2 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)} // Ferme le menu quand on clique
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/devis"
            className="bg-conte-orange text-white text-center py-4 rounded-xl font-bold shadow-md active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(false)}
          >
            Demander une Cotation
          </Link>
        </div>
      )}
    </header>
  );
}