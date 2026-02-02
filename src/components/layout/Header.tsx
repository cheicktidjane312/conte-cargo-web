"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // On importe le composant Image
import { Menu, X, Lock } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER FIXE */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white/50 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO (IMAGE) --- */}
          <Link href="/" className="relative z-50 flex items-center">
            {/* Assure-toi d'avoir mis logo.png dans le dossier public */}
            <Image 
              src="/logo.jpeg" 
              alt="Conte Cargo Logo" 
              width={160} // Ajuste la taille ici si besoin
              height={60} 
              className="object-contain h-12 w-auto" // h-12 limite la hauteur pour ne pas casser le header
              priority
            />
          </Link>

          {/* --- MENU BUREAU (PC) --- */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-conte-blue hover:text-conte-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Lien Admin */}
            <Link 
              href="/studio" 
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-conte-blue transition-colors border-l border-gray-300 pl-4"
            >
              <Lock size={14} /> Admin
            </Link>

            {/* Bouton Devis */}
            <Link
              href="/devis"
              className="bg-conte-orange text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-transform hover:scale-105 shadow-lg"
            >
              Demander un Devis
            </Link>
          </nav>

          {/* --- BOUTON BURGER (MOBILE) --- */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 p-2 text-conte-blue bg-white rounded-md shadow-sm border border-gray-100 active:scale-95 transition-transform"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* --- MENU MOBILE PLEIN ÉCRAN (OVERLAY) --- */}
      {/* z-[100] assure qu'il est AU-DESSUS de tout, même des boutons buggés */}
      <div
        className={`fixed inset-0 bg-white z-[100] flex flex-col justify-center px-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Bouton Fermer (En haut à droite) */}
        <div className="absolute top-6 right-6">
          <button 
            onClick={toggleMenu}
            className="p-3 bg-gray-100 rounded-full text-conte-blue hover:bg-gray-200"
          >
            <X size={32} />
          </button>
        </div>

        {/* Liens du Menu Mobile */}
        <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-2xl font-bold text-conte-blue py-2 active:text-conte-orange active:bg-gray-50 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
            {/* Bouton Admin Mobile */}
            <Link
              href="/studio"
              target="_blank"
              onClick={toggleMenu}
              className="flex items-center gap-2 text-gray-500 font-medium py-2 px-4 border border-gray-200 rounded-lg"
            >
              <Lock size={18} /> Espace Admin
            </Link>

            {/* Gros Bouton Devis */}
            <Link
              href="/devis"
              onClick={toggleMenu}
              className="w-full max-w-xs bg-conte-orange text-white py-4 rounded-xl font-bold text-xl shadow-xl text-center active:scale-95 transition-transform"
            >
              Demander un Devis
            </Link>
        </div>
      </div>
    </>
  );
}