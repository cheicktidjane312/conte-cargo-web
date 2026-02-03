import Header from "@/components/layout/Header";
import { client } from "@/sanity/lib/client";
import { Phone, Globe, MapPin, Facebook, MessageCircle, Instagram, Linkedin, Video } from "lucide-react"; // J'ai ajouté les icones manquantes
import Link from "next/link";

// 👇 FORCE LA MISE À JOUR INSTANTANÉE (Désactive le cache)
export const revalidate = 0;

// 1. LA BONNE REQUÊTE (On cherche "contactInfo" et non "contact")
const CONTACT_QUERY = `*[_type == "contactInfo"][0] {
  phoneNumbers, 
  email,
  facebook,
  instagram,
  tiktok,
  linkedin,
  addresses,
  mapUrl
}`;

// 2. LES BONS TYPES (Correspondent exactement à ton fichier Sanity)
interface ContactData {
  phoneNumbers?: Array<{
    country: string;
    flag: string;
    number: string;
  }>;
  email?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  linkedin?: string;
  addresses?: Array<{
    city: string;
    details: string;
  }>;
  mapUrl?: string;
}

export const metadata = {
  title: "Contactez-nous | Conte Cargo Navires Polyvalents",
  description: "Nos bureaux et contacts.",
};

export default async function ContactPage() {
  const data: ContactData = await client.fetch(CONTACT_QUERY) || {};

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <div className="bg-conte-blue pt-32 pb-16 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Restons en Contact</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Nos coordonnées sont mises à jour en temps réel.
        </p>
      </div>

      <section className="container mx-auto px-4 py-12">
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 -mt-24 relative z-10">
          
          {/* CARTE 1 : WHATSAPP (Boucle sur tes vrais numéros) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-conte-blue mb-4">WhatsApp Direct</h3>
            <div className="space-y-3 w-full">
              {data.phoneNumbers && data.phoneNumbers.length > 0 ? (
                data.phoneNumbers.map((phone, index) => {
                  const cleanNumber = phone.number.replace(/[^0-9]/g, '');
                  
                  return (
                    <a 
                      key={index} 
                      href={`https://wa.me/${cleanNumber}`} 
                      target="_blank" 
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition border border-transparent hover:border-green-200 group"
                    >
                      <span className="text-2xl">{phone.flag}</span>
                      <div className="text-left flex-1 pl-3">
                         <span className="block text-xs text-gray-400 font-bold uppercase">{phone.country}</span>
                         <span className="font-medium text-gray-700 group-hover:text-green-700 transition-colors">
                           {phone.number}
                         </span>
                      </div>
                      <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                    </a>
                  )
                })
              ) : (
                <p className="text-gray-400 italic">Aucun numéro configuré</p>
              )}
            </div>
          </div>

          {/* CARTE 2 : EMAILS & RÉSEAUX */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Globe className="w-8 h-8 text-conte-blue" />
            </div>
            <h3 className="text-xl font-bold text-conte-blue mb-4">En Ligne</h3>
            
            <div className="space-y-6 w-full">
              <div>
                <p className="text-sm text-gray-400 mb-1">Email Service Client</p>
                {data.email ? (
                  <a href={`mailto:${data.email}`} className="font-bold text-conte-orange hover:underline break-all">
                    {data.email}
                  </a>
                ) : (
                  <span className="text-gray-400">Non renseigné</span>
                )}
              </div>
              
              <div className="pt-4 border-t border-gray-100 w-full flex justify-center gap-3 flex-wrap">
                  {/* Facebook */}
                  {data.facebook && (
                    <a href={data.facebook} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-[#1877F2] hover:text-white transition text-gray-600">
                        <Facebook size={20} />
                    </a>
                  )}
                  {/* Instagram */}
                  {data.instagram && (
                    <a href={data.instagram} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-[#E4405F] hover:text-white transition text-gray-600">
                        <Instagram size={20} />
                    </a>
                  )}
                  {/* LinkedIn */}
                  {data.linkedin && (
                    <a href={data.linkedin} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-[#0A66C2] hover:text-white transition text-gray-600">
                        <Linkedin size={20} />
                    </a>
                  )}
                  {/* TikTok */}
                  {data.tiktok && (
                    <a href={data.tiktok} target="_blank" className="bg-gray-100 p-3 rounded-full hover:bg-black hover:text-white transition text-gray-600">
                        <Video size={20} />
                    </a>
                  )}
              </div>
              {(!data.facebook && !data.instagram && !data.linkedin && !data.tiktok) && (
                  <p className="text-gray-400 text-sm">Réseaux non configurés</p>
              )}
            </div>
          </div>

          {/* CARTE 3 : ADRESSES */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="bg-orange-100 p-4 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-conte-orange" />
            </div>
            <h3 className="text-xl font-bold text-conte-blue mb-4">Nos Agences</h3>
            <ul className="text-left space-y-4 text-gray-600 w-full">
              {data.addresses && data.addresses.length > 0 ? (
                data.addresses.map((addr, index) => (
                  <li key={index} className="flex gap-3 items-start p-2 hover:bg-orange-50 rounded-lg transition">
                    <MapPin className="text-conte-orange shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-conte-blue">{addr.city}</strong>
                        <span className="text-sm">{addr.details}</span>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-400 italic">Adresses non renseignées</p>
              )}
            </ul>
          </div>

        </div>

        {/* SECTION CARTE (MAPS) */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px] relative bg-gray-200">
          {data.mapUrl ? (
            <iframe 
              src={data.mapUrl} // Utilise le vrai champ mapUrl de ton schema
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
                <MapPin size={48} className="mb-2 opacity-50"/>
                <p>Carte non configurée (Ajouter le lien Google Maps dans le Studio)</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-conte-blue mb-4">Besoin d'un tarif immédiat ?</h2>
            <Link href="/devis" className="inline-block bg-conte-orange text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition hover:scale-105">
                Obtenir ma cotation en 1 clic
            </Link>
        </div>

      </section>
    </main>
  );
}