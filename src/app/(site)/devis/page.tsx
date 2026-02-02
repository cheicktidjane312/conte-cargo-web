// src/app/(site)/devis/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import { Send, Plane, Ship, Package, MapPin, Scale } from "lucide-react";

export default function DevisPage() {
  // Numéro principal pour la réception des devis (Mets le numéro du Sénégal par défaut)
  const NUMERO_RECEPTION = "221785060913"; 

  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    typeEnvoi: "Aérien ✈️",
    depart: "Italie",
    arrivee: "Sénégal",
    poids: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. On construit le message proprement
    const text = `
Bonjour Conte Cargo ! 👋
Je souhaite une cotation pour un envoi :

👤 *Nom:* ${formData.nom}
📞 *Tel:* ${formData.telephone}
📦 *Type:* ${formData.typeEnvoi}
🛫 *De:* ${formData.depart}
🛬 *Vers:* ${formData.arrivee}
⚖️ *Poids/Volume:* ${formData.poids}

📝 *Détails:* ${formData.message || "RAS"}
    `;

    // 2. On encode le texte pour l'URL
    const encodedText = encodeURIComponent(text);

    // 3. On ouvre WhatsApp
    window.open(`https://wa.me/${NUMERO_RECEPTION}?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <div className="bg-conte-blue pt-32 pb-20 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Demandez votre Cotation</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Remplissez ce formulaire pour recevoir une estimation rapide de votre expédition.
        </p>
      </div>

      <section className="container mx-auto px-4 -mt-10 mb-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-gray-100">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* INFORMATIONS PERSONNELLES */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nom Complet</label>
                <input 
                  type="text" name="nom" required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-conte-orange outline-none transition"
                  placeholder="Votre nom"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone (WhatsApp)</label>
                <input 
                  type="tel" name="telephone" required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-conte-orange outline-none transition"
                  placeholder="+221 ..."
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* TYPE D'ENVOI */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Type d'Envoi</label>
              <div className="grid grid-cols-3 gap-4">
                {['Aérien ✈️', 'Maritime 🚢', 'GP / Colis 📦'].map((type) => (
                  <div key={type} 
                    onClick={() => setFormData({...formData, typeEnvoi: type})}
                    className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center justify-center transition-all ${formData.typeEnvoi === type ? 'border-conte-orange bg-orange-50 text-conte-orange' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <span className="font-bold text-sm text-center">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TRAJET */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">Ville de Départ</label>
                <MapPin className="absolute left-3 top-10 text-gray-400 w-5 h-5" />
                <select name="depart" className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-white" onChange={handleChange}>
                  <option value="Italie">Italie (Tout)</option>
                  <option value="France">France</option>
                  <option value="Autre Europe">Autre Europe</option>
                </select>
              </div>
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2">Ville d'Arrivée</label>
                <MapPin className="absolute left-3 top-10 text-conte-orange w-5 h-5" />
                <select name="arrivee" className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-white" onChange={handleChange}>
                  <option value="Sénégal">Sénégal (Dakar)</option>
                  <option value="Guinée">Guinée (Conakry)</option>
                  <option value="Mali">Mali (Bamako)</option>
                </select>
              </div>
            </div>

            {/* POIDS & MESSAGE */}
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-2">Poids (Kg) ou Volume estimé</label>
               <div className="relative">
                 <Scale className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                 <input 
                  type="text" name="poids" required 
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-conte-orange outline-none"
                  placeholder="Ex: 20kg ou 2 Valises"
                  onChange={handleChange}
                />
               </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message (Facultatif)</label>
              <textarea 
                name="message" rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-conte-orange outline-none"
                placeholder="Précisions sur la marchandise..."
                onChange={handleChange}
              ></textarea>
            </div>

            {/* BOUTON D'ACTION */}
            <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg">
              <Send className="w-6 h-6" />
              Envoyer la demande sur WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">
              Réponse rapide garantie sous 1h
            </p>

          </form>
        </div>
      </section>
    </main>
  );
}