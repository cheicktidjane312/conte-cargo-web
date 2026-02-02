// src/components/ui/FloatingWhatsApp.tsx
"use client"; // Obligatoire car on utilise de l'interactivité (useState)

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react'; // On utilise les icônes Lucide

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { country: 'Sénégal', flag: '🇸🇳', number: '221785060913', label: 'Dakar (Bureau 1)' },
    { country: 'Sénégal', flag: '🇸🇳', number: '221785049804', label: 'Dakar (Bureau 2)' },
    { country: 'Guinée', flag: '🇬🇳', number: '224611686341', label: 'Conakry' },
    { country: 'Italie', flag: '🇮🇹', number: '393511557209', label: 'Italie (Bureau)' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* MENU DÉROULANT (Apparaît quand on clique) */}
      <div className={`transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 w-64">
          <div className="bg-[#25D366] p-3 text-white text-center font-bold text-sm">
            👋 Discuter avec nous
          </div>
          <div className="flex flex-col">
            {contacts.map((contact, index) => (
              <a 
                key={index}
                href={`https://wa.me/${contact.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 text-gray-700"
              >
                <span className="text-2xl">{contact.flag}</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400">{contact.country}</span>
                  <span className="text-sm font-medium">{contact.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOUTON PRINCIPAL */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-[#25D366] animate-bounce-slow'}`}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageCircle className="w-8 h-8 text-white fill-current" />
        )}
      </button>
    </div>
  );
}