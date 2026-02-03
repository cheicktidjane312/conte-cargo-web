import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/layout/Header";
import Image from "next/image";

// 👇 FORCE LA MISE À JOUR INSTANTANÉE
export const revalidate = 0;

// 1. REQUÊTE ADAPTÉE (On lit 'realisation' mais on sort les champs attendus par ton code)
const ARRIVAGES_QUERY = `*[_type == "realisation"] | order(_createdAt desc) {
  _id,
  title,
  "publishedAt": _createdAt,
  description,
  "videoUrl": video.asset->url
}`;

// 2. TYPES
interface ArrivageDoc {
  _id: string;
  title: string;
  publishedAt: string;
  description: string;
  videoUrl?: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export const metadata = {
  title: "Nos Réalisations & Arrivages | Conte Cargo",
  description: "Suivez nos derniers arrivages de conteneurs et chargements en vidéo.",
};

export default async function RealisationsPage() {
  const arrivages: ArrivageDoc[] = await client.fetch(ARRIVAGES_QUERY);

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* EN-TÊTE */}
      <div className="bg-conte-blue pt-32 pb-16 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Nos Arrivages en Direct</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          La transparence est notre priorité. Retrouvez ici les vidéos de nos chargements et dépotages.
        </p>
      </div>

      {/* FIL D'ACTUALITÉ */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        {arrivages.length > 0 ? (
          <div className="space-y-16">
            {arrivages.map((item) => (
              <article key={item._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                
                {/* EN-TÊTE DU POST */}
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-conte-blue">{item.title}</h2>
                    <p className="text-sm text-gray-400 mt-1">
                      Publié le {new Date(item.publishedAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    Confirmé
                  </div>
                </div>

                {/* MEDIA (VIDÉO OU PHOTO) */}
                <div className="w-full bg-black">
                  {item.videoUrl ? (
                    <video 
                      controls 
                      className="w-full max-h-[500px] object-contain"
                      // J'ai retiré le poster car on n'a pas d'image dans le schema simplifié
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  ) : (
                    <div className="h-48 flex items-center justify-center text-gray-500">
                      Aucun média
                    </div>
                  )}
                </div>

                {/* DESCRIPTION */}
                {item.description && (
                  <div className="p-6 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 bg-white rounded-xl shadow p-10">
            <p className="text-xl">🚀 Aucun arrivage publié pour le moment.</p>
            <p className="mt-2 text-sm">Allez dans le Studio pour ajouter votre première vidéo !</p>
          </div>
        )}
      </section>
    </main>
  );
}