"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(100); // Pour gérer la transition de sortie

  useEffect(() => {
    // 1. On attend 1.5s avant de commencer à faire disparaître
    const timerWait = setTimeout(() => {
        setOpacity(0); // On lance le fondu vers transparent
    }, 1500);

    // 2. On attend la fin de l'animation de fondu (500ms) avant de retirer le composant du DOM
    const timerRemove = setTimeout(() => {
      setLoading(false);
    }, 2000); // 1500ms + 500ms de transition

    return () => {
        clearTimeout(timerWait);
        clearTimeout(timerRemove);
    };
  }, []);

  if (!loading) return null;

  return (
    // Container principal avec transition d'opacité fluide
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${opacity === 0 ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* --- Bloc Animation --- */}
        {/* On agrandit un peu la zone (h-28 w-28) */}
        <div className="relative flex h-28 w-28 items-center justify-center">
           {/* Cercle de fond très subtil (gris très clair) */}
           <div className="absolute h-full w-full rounded-full border-[1px] border-gray-100"></div>

           {/* Anneau extérieur fin, Bleu Profond, qui tourne */}
           {/* border-t-2 et border-b-2 crée deux arcs élégants */}
           <div className="absolute h-full w-full animate-spin rounded-full border-[2px] border-transparent border-b-blue-800 border-t-blue-800"></div>

           {/* Cercle central fixe avec les initiales */}
           <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 shadow-sm">
             {/* Initiales "CC" avec une police serif (plus classe) */}
             <span className="text-2xl font-bold text-blue-800" style={{ fontFamily: 'serif, Georgia, Times New Roman' }}>
               CC
             </span>
           </div>
        </div>

        {/* --- Texte --- */}
        {/* Texte en bas, en majuscules très espacées (tracking-widest) pour un effet luxe */}
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-blue-900/60 animate-pulse">
          Chargement
        </p>
      </div>
    </div>
  );
}