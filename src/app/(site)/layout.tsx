import type { Metadata } from "next";
import { Inter } from "next/font/google";

// 👇 C'est ICI que ça marche : on remonte d'un cran pour trouver le CSS
import "../globals.css"; 

import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"; // J'ajoute le Header ici pour être sûr

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Conte Cargo Navires Polyvalents",
  description: "Transit Maritime et Aérien",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
        {/* Le Header s'affiche en haut */}
        <Header /> 
        
        {/* Le contenu de la page */}
        {children}
        
        {/* Le Footer et WhatsApp en bas */}
        <Footer />
        <FloatingWhatsApp />
    </div>
  );
}