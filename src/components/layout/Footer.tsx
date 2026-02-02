// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-conte-blue text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* COLONNE 1 : INFOS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-conte-orange">Conte Cargo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour le transit maritime et aérien entre l'Europe et l'Afrique. Sécurité, rapidité et transparence.
            </p>
          </div>

          {/* COLONNE 2 : LIENS RAPIDES */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-conte-orange transition">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-conte-orange transition">Nos Services</Link></li>
              <li><Link href="/realisations" className="hover:text-conte-orange transition">Nos Réalisations</Link></li>
              <li><Link href="/contact" className="hover:text-conte-orange transition">Contact & Agences</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : LÉGAL */}
          <div>
            <h4 className="font-bold mb-4">Informations Légales</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/mentions-legales" className="hover:text-conte-orange transition">Mentions Légales</Link></li>
              <li><Link href="/confidentialite" className="hover:text-conte-orange transition">Politique de Confidentialité</Link></li>
              <li><Link href="/devis" className="hover:text-conte-orange transition">Demander un Devis</Link></li>
            </ul>
          </div>

          {/* COLONNE 4 : SUIVEZ-NOUS */}
          <div>
            <h4 className="font-bold mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1WTTeErvUX/?mibextid=wwXIfr" target="_blank" className="bg-white/10 p-2 rounded-full hover:bg-conte-orange transition">
                <Facebook size={20} />
              </a>
              {/* Tu pourras ajouter les autres liens plus tard */}
              <div className="bg-white/5 p-2 rounded-full opacity-50 cursor-not-allowed">
                <Instagram size={20} />
              </div>
              <div className="bg-white/5 p-2 rounded-full opacity-50 cursor-not-allowed">
                <Linkedin size={20} />
              </div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Conte Cargo Navires Polyvalents. Tous droits réservés.</p>
          <p className="mt-2">
            Conçu avec fierté par{" "}
            <a // On utilise <a> ici pour un lien externe (hors du site)
              href="https://www.fierlah-agency.com" // <--- METS TON LIEN ICI
              target="_blank" // Ouvre dans un nouvel onglet
              rel="noopener noreferrer" // Sécurité pour les liens externes
              className="text-conte-orange font-bold hover:underline"
            >
              FIERLAH AGENCY
            </a>
          </p>
        </div>
        </div>
    </footer>
  );
}