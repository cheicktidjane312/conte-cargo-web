import Image from "next/image";
import Link from "next/link";
import { Plane, Ship, Package, Clock, Shield, CheckCircle, Globe } from "lucide-react";

export default function Home() {
  return (
    // 1. LE PADDING-TOP (pt-32) EST ICI
    // Il pousse le contenu vers le bas pour ne pas être caché par le Header fixe
    <main className="flex min-h-screen flex-col pt-32">

      {/* --- SECTION 1 : HERO (L'ACCROCHE) --- */}
      <section className="relative px-6 lg:px-12 pb-20 pt-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte d'accroche */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-block bg-orange-100 text-conte-orange px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
              🚀 Leader du Transit Europe - Afrique
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-conte-blue leading-tight">
              Expédiez sans <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-conte-orange to-orange-600">
                Frontières.
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              De l'Italie vers le Sénégal et la Guinée. Nous transportons vos colis, véhicules et conteneurs avec sécurité et rapidité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/devis" className="bg-conte-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-all text-center">
                Obtenir un Devis Gratuit
              </Link>
              <Link href="/services" className="px-8 py-4 rounded-xl font-bold text-conte-blue border-2 border-conte-blue hover:bg-conte-blue hover:text-white transition-all text-center">
                Nos Tarifs & Services
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-semibold text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" /> Service 24/7
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" /> Paiement Sécurisé
              </div>
            </div>
          </div>

          {/* Image d'illustration (Placeholder stylé) */}
          <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-in slide-in-from-right duration-1000">
            {/* Ici on mettra une vraie photo plus tard via Sanity ou dossier public */}
            <div className="absolute inset-0 bg-gradient-to-br from-conte-blue to-blue-900 flex items-center justify-center text-white/20">
              <Ship size={120} />
            </div>
            {/* Simulation d'une carte flottante */}
            <div className="absolute bottom-10 left-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs">
              <div className="bg-green-100 p-3 rounded-full">
                <Package className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Statut de l'envoi</p>
                <p className="font-bold text-conte-blue">Arrivé à Dakar 🇸🇳</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2 : NOS SERVICES --- */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-conte-blue mb-4">Nos Solutions de Transport</h2>
            <p className="text-gray-600">Que ce soit par air ou par mer, nous avons la solution adaptée à votre budget et vos délais.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 : Aérien */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-conte-blue transition-colors">
                <Plane className="text-conte-blue w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-conte-blue mb-3">Fret Aérien</h3>
              <p className="text-gray-500 mb-6">L'option la plus rapide pour vos documents et colis urgents. Départs hebdomadaires.</p>
              <Link href="/services" className="text-conte-orange font-bold hover:underline">En savoir plus →</Link>
            </div>

            {/* Service 2 : Maritime */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-conte-orange transition-colors">
                <Ship className="text-conte-orange w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-conte-blue mb-3">Fret Maritime</h3>
              <p className="text-gray-500 mb-6">Groupage et conteneurs complets. Idéal pour les gros volumes et déménagements.</p>
              <Link href="/services" className="text-conte-orange font-bold hover:underline">En savoir plus →</Link>
            </div>

            {/* Service 3 : GP / Colis */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Package className="text-green-600 w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-conte-blue mb-3">GP & Colis</h3>
              <p className="text-gray-500 mb-6">Service de messagerie express pour vos petits paquets et achats personnels.</p>
              <Link href="/services" className="text-conte-orange font-bold hover:underline">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3 : POURQUOI NOUS ? --- */}
      <section className="bg-conte-blue text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            
            <div className="space-y-4">
              <div className="mx-auto bg-white/10 w-20 h-20 rounded-full flex items-center justify-center">
                <Clock size={40} className="text-conte-orange" />
              </div>
              <h4 className="text-xl font-bold">Rapidité</h4>
              <p className="text-gray-400 text-sm">Délais respectés et optimisés pour chaque envoi.</p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto bg-white/10 w-20 h-20 rounded-full flex items-center justify-center">
                <Shield size={40} className="text-conte-orange" />
              </div>
              <h4 className="text-xl font-bold">Sécurité</h4>
              <p className="text-gray-400 text-sm">Marchandises assurées et protégées du départ à l'arrivée.</p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto bg-white/10 w-20 h-20 rounded-full flex items-center justify-center">
                <Globe size={40} className="text-conte-orange" />
              </div>
              <h4 className="text-xl font-bold">International</h4>
              <p className="text-gray-400 text-sm">Présents en Italie, au Sénégal et en Guinée.</p>
            </div>

            <div className="space-y-4">
              <div className="mx-auto bg-white/10 w-20 h-20 rounded-full flex items-center justify-center">
                <Package size={40} className="text-conte-orange" />
              </div>
              <h4 className="text-xl font-bold">Suivi</h4>
              <p className="text-gray-400 text-sm">Restez informé de la position de vos colis.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 4 : CTA FINAL --- */}
      <section className="py-24 px-6 text-center">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 lg:p-20 text-white shadow-2xl max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Prêt à expédier ?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Obtenez votre tarif en moins d'une minute directement via WhatsApp.
            Simple, rapide et sans engagement.
          </p>
          <Link href="/devis" className="inline-block bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition shadow-lg">
            Demander mon Tarif 🚀
          </Link>
        </div>
      </section>

    </main>
  );
}