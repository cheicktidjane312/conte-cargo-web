// src/app/services/page.tsx
import { client } from "@/sanity/lib/client";
import ServiceCard from "@/components/ui/ServiceCard";
import Header from "@/components/layout/Header";

// Requête GROQ
const SERVICES_QUERY = `*[_type == "service"] | order(_createdAt desc) {
  _id,
  title,
  poster
}`;

interface ServiceDoc {
  _id: string;
  title: string;
  poster: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export const metadata = {
  title: "Nos Services de Transit | Conte Cargo",
  description: "Découvrez nos solutions de transport maritime, aérien et GP.",
};

export default async function ServicesPage() {
  let services: ServiceDoc[] = [];
  let errorMsg = "";

  // ON SÉCURISE LA CONNEXION ICI
  try {
    services = await client.fetch(SERVICES_QUERY);
  } catch (error) {
    console.error("Erreur Sanity:", error);
    errorMsg = "Erreur de connexion à la base de données.";
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="bg-conte-blue pt-32 pb-16 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Nos Solutions Logistiques</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Des services adaptés à vos besoins.
        </p>
      </div>

      <section className="container mx-auto px-4 py-16">
        {/* Affichage des erreurs si besoin */}
        {errorMsg && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
                <p>⚠️ {errorMsg}</p>
                <p className="text-sm">Vérifiez votre terminal.</p>
            </div>
        )}

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service._id} 
                title={service.title} 
                image={service.poster} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            {!errorMsg && <p>Aucun service affiché pour le moment.</p>}
          </div>
        )}
      </section>

    </main>
  );
}