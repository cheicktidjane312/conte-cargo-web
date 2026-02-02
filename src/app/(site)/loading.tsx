export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Cercle extérieur */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200"></div>
        
        {/* Cercle intérieur (couleur principale) */}
        <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        
        {/* Optionnel : Logo ou icône au centre */}
        {/* <span className="absolute text-xs font-bold text-blue-600">CC</span> */}
      </div>
    </div>
  );
}