"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Le loader disparaît après 1.5 secondes (1500ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4">
        {/* Cercle animé */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
        
        {/* Petit texte (optionnel) */}
        <p className="text-sm font-medium text-gray-500 animate-pulse">Chargement...</p>
      </div>
    </div>
  );
}