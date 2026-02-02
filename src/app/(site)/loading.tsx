export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      {/* Animation des cercles (Spinner) */}
      <div className="relative flex items-center justify-center mb-4">
        {/* Cercle Bleu Extérieur */}
        <div className="w-16 h-16 border-4 border-conte-blue/20 border-t-conte-blue rounded-full animate-spin"></div>
        {/* Cercle Orange Intérieur */}
        <div className="absolute w-8 h-8 border-4 border-conte-orange/20 border-b-conte-orange rounded-full animate-spin-reverse"></div>
      </div>
      
      {/* Petit texte rassurant */}
      <p className="text-conte-blue font-bold animate-pulse">Chargement...</p>
    </div>
  );
}