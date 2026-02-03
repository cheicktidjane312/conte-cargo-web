import { client } from "@/sanity/lib/client";
import Image from "next/image";

// 👇 C'est LA ligne magique : 0 = Pas de cache, mise à jour instantanée
export const revalidate = 0; 

async function getServices() {
  // On récupère le titre, la description et l'URL de l'image (poster)
  const query = `*[_type == "service"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "imageUrl": poster.asset->url 
  }`;
  
  return await client.fetch(query);
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="container mx-auto min-h-screen px-4 py-12">
      <h1 className="mb-12 text-center text-4xl font-bold text-gray-800">
        Nos Services
      </h1>

      {/* Grille des services */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service: any) => (
          <div 
            key={service._id} 
            className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
          >
            {/* Image du Service (Flyer/Poster) */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
              {service.imageUrl ? (
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                // Image par défaut si pas de poster
                <div className="flex h-full items-center justify-center text-gray-400">
                  Pas d'image
                </div>
              )}
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-blue-900">
                {service.title}
              </h3>
              <p className="text-gray-600 line-clamp-3">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message si aucun service */}
      {services.length === 0 && (
        <p className="text-center text-gray-500">
          Aucun service disponible pour le moment.
        </p>
      )}
    </div>
  );
}