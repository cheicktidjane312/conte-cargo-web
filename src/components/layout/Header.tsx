"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Lock } from "lucide-react"; // J'importe l'icône Lock pour l'admin

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Liste des liens pour éviter de répéter le code
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 z-50">
           {/* Si tu as un logo image, mets-le ici, sinon texte */}
           <span className="text-2xl font-extrabold text-conte-blue tracking-tighter">
             CONTE<span className="text-conte-orange">CARGO</span>
           </span>
        </Link>

        {/* --- MENU BUREAU (Caché sur mobile) --- */}
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

          {/* Lien Admin Bureau */}
          <Link 
            href="/studio" 
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-conte-blue transition-colors border-l border-gray-300 pl-4"
          >
            <Lock size={14} /> Admin
          </Link>

          {/* Bouton CTA Bureau */}
          <Link
            href="/devis"
            className="bg-conte-orange text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-transform hover:scale-105 shadow-lg"
          >
            Demander un Devis
          </Link>
        </nav>

        {/* --- BOUTON BURGER MOBILE --- */}
        <button
          onClick={toggleMenu}
          className="lg:hidden z-50 text-conte-blue p-2 bg-white/50 rounded-lg"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* --- MENU MOBILE DÉROULANT --- */}
        {/* On utilise une div fixe qui prend tout l'écran */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu} // Ferme le menu quand on clique
              className="text-2xl font-bold text-conte-blue hover:text-conte-orange"
            >
              {link.name}
            </Link>
          ))}

          <hr className="w-1/3 border-gray-200" />

          {/* Lien Admin Mobile */}
          <Link
            href="/studio"
            target="_blank"
            onClick={toggleMenu}
            className="flex items-center gap-2 text-gray-500 font-medium"
          >
            <Lock size={18} /> Espace Admin
          </Link>

          <Link
            href="/devis"
            onClick={toggleMenu}
            className="bg-conte-orange text-white px-8 py-4 rounded-xl font-bold text-xl shadow-xl"
          >
            Demander un Devis
          </Link>
        </div>
      </div>
    </header>
  );
}