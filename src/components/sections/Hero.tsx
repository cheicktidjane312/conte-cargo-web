// components/sections/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-conte-blue text-white overflow-hidden">
      
      {/* Fond Dégradé (En attendant une photo) */}
      <div className="absolute inset-0 bg-gradient-to-br from-conte-blue via-[#112240] to-conte-blue z-0" />
      
      {/* Formes décoratives (Optionnel, pour le style "Tech/Moderne") */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-conte-orange/10 skew-x-12 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTE D'ACCROCHE */}
        <div className="space-y-6">
          <div className="inline-block bg-conte-orange/20 text-conte-orange px-4 py-1 rounded-full text-sm font-bold border border-conte-orange/50">
            ✈️ Maritime • Aérien • GP
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Votre Partenaire de Confiance pour le <span className="text-conte-orange">Transit International</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-lg">
            Expédiez vos colis et conteneurs entre l'Europe (Italie) et l'Afrique (Sénégal, Guinée) en toute sécurité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/devis" className="bg-conte-orange text-white text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
              Obtenir un Devis Gratuit
            </Link>
            <Link href="/services" className="border border-white/30 text-white text-center px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all">
              Voir nos Services
            </Link>
          </div>
        </div>

        {/* ZONE DROITE (Image ou Illustration) */}
        <div className="hidden md:block relative h-[500px] w-full bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6">
            {/* Ici on mettra une belle image de bateau ou avion plus tard */}
            <div className="h-full w-full bg-conte-blue/50 rounded-xl flex items-center justify-center text-white/20 font-bold text-2xl border-2 border-dashed border-white/20">
                [Image Navire/Avion]
            </div>
        </div>

      </div>
    </section>
  );
}