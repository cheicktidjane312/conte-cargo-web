// src/components/ui/ServiceCard.tsx
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'; 

// 1. On définit précisément le Hotspot (plus de 'any')
interface SanityHotspot {
  x: number;
  y: number;
  height: number;
  width: number;
}

// 2. On définit l'image complète
interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  hotspot?: SanityHotspot; // Ici on utilise le type précis au lieu de any
}

interface ServiceCardProps {
  title: string;
  image: SanityImage;
}

export default function ServiceCard({ title, image }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      
      <div className="relative h-80 w-full overflow-hidden">
        {image?.asset && (
          <Image
            src={urlFor(image).url()}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-conte-blue/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-conte-orange transition-colors">
          {title}
        </h3>
        <div className="h-1 w-12 bg-conte-orange mt-2 rounded-full group-hover:w-full transition-all duration-500" />
      </div>

    </div>
  );
}