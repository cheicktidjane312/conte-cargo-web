import { client } from "@/sanity/lib/client";
import Header from "@/components/layout/Header";
import { VideoOff } from "lucide-react"; // J'ajoute une icône pour le cas où il n'y a pas de vidéo

// 👇 FORCE LA MISE À JOUR INSTANTANÉE
export const revalidate = 0;

// 1. REQUÊTE CORRIGÉE (Correspond à ton schema realisation.ts)
const REALISATIONS_QUERY = `*[_type == "realisation"] | order(_createdAt desc) {
  _id,
  title,
  description,
  "publishedAt": _createdAt, // On utilise la date de création automatique du système
  "videoUrl": video.asset->url // On récupère l'URL du fichier vidéo
}`;

// 2. TYPES (Strictement basés sur ton schema)
interface RealisationDoc {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  videoUrl?: string;
}

export const metadata = {
  title: "Nos Réalisations & Arrivages | Conte Cargo",
  description: "Suivez nos derniers arrivages de conteneurs et chargements en vidéo.",
};

export default async function RealisationsPage() {
  const realisations: RealisationDoc[] = await client.fetch(REALISATIONS_QUERY);

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
        {realisations.length > 0 ? (
          <div className="space-y-16">
            {realisations.map((item) => (
              <article key={item._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                
                {/* EN-TÊTE DU POST */}
                <div className="p-6 border-b border-gray-50 flex justify-between items-center flex-wrap gap-4">
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

                {/* MEDIA (VIDÉO UNIQUEMENT) */}
                <div className="w-full bg-black aspect-video flex items-center justify-center">
                  {item.videoUrl ? (
                    <video 
                      controls 
                      className="w-full h-full object-contain"
                      playsInline
                      preload="metadata"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  ) : (
                    <div className="flex flex-col items-center text-gray-500">
                      <VideoOff size={48} className="mb-2 opacity-50" />
                      <p>Vidéo en cours de traitement</p>
                    </div>
                  )}
                </div>

                {/* DESCRIPTION */}
                {item.description && (
                  <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
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
          </div>
        )}
      </section>
    </main>
  );
}