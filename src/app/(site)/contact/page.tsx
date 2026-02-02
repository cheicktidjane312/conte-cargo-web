import Header from "@/components/layout/Header";
import { client } from "@/sanity/lib/client";
import { Phone, Globe, MapPin, Facebook, MessageCircle } from "lucide-react"; // J'ai ajouté l'icône MessageCircle pour WhatsApp
import Link from "next/link";

// 1. On ajoute mapUrl à la requête
const CONTACT_QUERY = `*[_type == "contactInfo"][0] {
  phoneNumbers, 
  email,
  facebook,
  addresses,
  mapUrl
}`;

interface ContactData {
  phoneNumbers?: Array<{
    country: string;
    flag: string;
    number: string;
  }>;
  email?: string;
  facebook?: string;
  addresses?: Array<{
    city: string;
    details: string;
  }>;
  mapUrl?: string; // Le nouveau champ
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
          
          {/* CARTE 1 : WHATSAPP (Modifié) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              {/* Icône WhatsApp */}
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-conte-blue mb-4">WhatsApp Direct</h3>
            <div className="space-y-3 w-full">
              {data.phoneNumbers && data.phoneNumbers.length > 0 ? (
                data.phoneNumbers.map((phone, index) => {
                  // Nettoyage du numéro pour le lien WhatsApp (enlève les espaces et les +)
                  const cleanNumber = phone.number.replace(/[^0-9]/g, '');
                  
                  return (
                    <a 
                      key={index} 
                      href={`https://wa.me/${cleanNumber}`} 
                      target="_blank" // Ouvre dans un nouvel onglet
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition border border-transparent hover:border-green-200 group"
                    >
                      <span className="text-2xl">{phone.flag}</span>
                      <span className="font-medium text-gray-700 group-hover:text-green-700 transition-colors">
                        {phone.number}
                      </span>
                      {/* Petite flèche pour indiquer le clic */}
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
            
            <div className="space-y-6">
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
              
              {data.facebook && (
                <div className="pt-4 border-t border-gray-100 w-full">
                  <a 
                    href={data.facebook} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                  >
                    <Facebook size={20} />
                    Suivre sur Facebook
                  </a>
                </div>
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

        {/* SECTION CARTE (DYNAMIQUE MAINTENANT) */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px] relative bg-gray-200">
          {data.mapUrl ? (
            <iframe 
              src={data.mapUrl} // Utilise le lien du CMS
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            // Fallback si pas de carte : Image ou message
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100">
                <MapPin size={48} className="mb-2 opacity-50"/>
                <p>Carte non configurée dans le Studio</p>
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