import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Video } from 'lucide-react'; // J'ai ajouté Video pour TikTok
import { client } from "@/sanity/lib/client";

export default async function Footer() {
  // 1. On récupère les liens depuis Sanity (sans cache pour l'instant)
  const socials = await client.fetch(
    `*[_type == "contactInfo"][0] { facebook, instagram, linkedin, tiktok }`,
    {},
    { next: { revalidate: 0 } }
  ) || {};

  return (
    <footer className="bg-conte-blue text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* COLONNE 1 : INFOS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-conte-orange">Conte Cargo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour le transit maritime et aérien entre l'Asie, l'Europe l'Afrique et l'Amérique. Sécurité, rapidité et transparence.
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

          {/* COLONNE 4 : SUIVEZ-NOUS (DYNAMIQUE) */}
          <div>
            <h4 className="font-bold mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-4">
              
              {/* FACEBOOK */}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#1877F2] transition">
                  <Facebook size={20} />
                </a>
              )}

              {/* INSTAGRAM */}
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#E4405F] transition">
                  <Instagram size={20} />
                </a>
              )}

              {/* LINKEDIN */}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-[#0A66C2] transition">
                  <Linkedin size={20} />
                </a>
              )}

              {/* TIKTOK */}
              {socials.tiktok && (
                <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-black transition">
                  <Video size={20} />
                </a>
              )}

              {/* Message si aucun réseau n'est configuré */}
              {!socials.facebook && !socials.instagram && !socials.linkedin && !socials.tiktok && (
                 <span className="text-gray-500 text-xs italic">Non configuré</span>
              )}

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Conte Cargo Navires Polyvalents. Tous droits réservés.</p>
          <p className="mt-2">
            Conçu avec fierté par{" "}
            <a 
              href="https://www.fierlah-agency.com"
              target="_blank"
              rel="noopener noreferrer"
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