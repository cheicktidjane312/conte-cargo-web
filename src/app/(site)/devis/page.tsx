"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import { Send, MapPin, Scale, Globe } from "lucide-react";

// 1. DATA : La liste complète des continents et pays (Structure optimisée)
const LOCATIONS: Record<string, string[]> = {
  "Afrique": [
    "Afrique du Sud", "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso", "Burundi", 
    "Cameroun", "Cap-Vert", "Centrafrique", "Comores", "Congo (Brazzaville)", "Congo (RDC)", 
    "Côte d'Ivoire", "Djibouti", "Égypte", "Érythrée", "Eswatini", "Éthiopie", "Gabon", 
    "Gambie", "Ghana", "Guinée", "Guinée-Bissau", "Guinée équatoriale", "Kenya", "Lesotho", 
    "Liberia", "Libye", "Madagascar", "Malawi", "Mali", "Maroc", "Maurice", "Mauritanie", 
    "Mozambique", "Namibie", "Niger", "Nigeria", "Ouganda", "Rwanda", "Sao Tomé-et-Principe", 
    "Sénégal", "Seychelles", "Sierra Leone", "Somalie", "Soudan", "Soudan du Sud", "Tanzanie", 
    "Tchad", "Togo", "Tunisie", "Zambie", "Zimbabwe"
  ],
  "Europe": [
    "Allemagne", "Albanie", "Andorre", "Autriche", "Belgique", "Biélorussie", "Bosnie-Herzégovine", 
    "Bulgarie", "Chypre", "Croatie", "Danemark", "Espagne", "Estonie", "Finlande", "France", 
    "Grèce", "Hongrie", "Irlande", "Islande", "Italie", "Kosovo", "Lettonie", "Liechtenstein", 
    "Lituanie", "Luxembourg", "Macédoine du Nord", "Malte", "Moldavie", "Monaco", "Monténégro", 
    "Norvège", "Pays-Bas", "Pologne", "Portugal", "République tchèque", "Roumanie", "Royaume-Uni", 
    "Russie", "Saint-Marin", "Serbie", "Slovaquie", "Slovénie", "Suède", "Suisse", "Ukraine", "Vatican"
  ],
  "Amérique": [
    "Argentine", "Bolivie", "Brésil", "Canada", "Chili", "Colombie", "Costa Rica", "Cuba", 
    "Équateur", "États-Unis", "Guatemala", "Haïti", "Honduras", "Jamaïque", "Mexique", 
    "Nicaragua", "Panama", "Paraguay", "Pérou", "République dominicaine", "Salvador", 
    "Uruguay", "Venezuela"
  ],
  "Asie": [
    "Afghanistan", "Bangladesh", "Chine", "Corée du Sud", "Inde", "Indonésie", "Japon", 
    "Malaisie", "Pakistan", "Philippines", "Singapour", "Sri Lanka", "Thaïlande", "Turquie", "Vietnam"
  ],
  "Pays du Golfe": [
    "Arabie saoudite", "Bahreïn", "Émirats arabes unis (Dubaï)", "Koweït", "Oman", "Qatar"
  ]
};

export default function DevisPage() {
  const NUMERO_RECEPTION = "221785060913"; 

  // 2. STATE : On sépare Continents et Pays pour gérer la cascade
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    typeEnvoi: "Aérien ✈️",
    poids: "",
    message: "",
  });

  // États spécifiques pour les lieux (Départ / Arrivée)
  const [departContinent, setDepartContinent] = useState("");
  const [departPays, setDepartPays] = useState("");
  
  const [arriveeContinent, setArriveeContinent] = useState("");
  const [arriveePays, setArriveePays] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construction du message WhatsApp
    const text = `
👋 Bonjour Conte Cargo !
Je souhaite une cotation :

👤 *Nom:* ${formData.nom}
📞 *Tel:* ${formData.telephone}
📦 *Type:* ${formData.typeEnvoi}

🛫 *DÉPART:* ${departPays} (${departContinent})
🛬 *ARRIVÉE:* ${arriveePays} (${arriveeContinent})

⚖️ *Poids/Vol:* ${formData.poids}
📝 *Msg:* ${formData.message || "RAS"}
    `;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${NUMERO_RECEPTION}?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <div className="bg-conte-blue pt-32 pb-20 px-4 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Demandez votre Cotation</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Sélectionnez vos zones géographiques pour une estimation précise.
        </p>
      </div>

      <section className="container mx-auto px-4 -mt-10 mb-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-gray-100">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* --- 1. QUI ÊTES-VOUS ? --- */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nom Complet</label>
                <input 
                  type="text" name="nom" required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-conte-orange outline-none"
                  placeholder="Votre nom"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                <input 
                  type="tel" name="telephone" required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-conte-orange outline-none"
                  placeholder="+221 ..."
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="h-px bg-gray-100"></div>

            {/* --- 2. TRAJET (CONTINENTS & PAYS) --- */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* COLONNE DÉPART */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <h3 className="font-bold text-gray-700">Origine (Départ)</h3>
                </div>
                
                {/* Select Continent Départ */}
                <div className="mb-3">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Continent</label>
                    <select 
                        required
                        className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-white focus:border-conte-orange outline-none"
                        value={departContinent}
                        onChange={(e) => {
                            setDepartContinent(e.target.value);
                            setDepartPays(""); // Reset pays quand on change de continent
                        }}
                    >
                        <option value="">Choisir...</option>
                        {Object.keys(LOCATIONS).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                {/* Select Pays Départ (Désactivé tant que continent pas choisi) */}
                <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">Pays</label>
                    <select 
                        required
                        disabled={!departContinent}
                        className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-white disabled:bg-gray-100 disabled:text-gray-400 focus:border-conte-orange outline-none"
                        value={departPays}
                        onChange={(e) => setDepartPays(e.target.value)}
                    >
                        <option value="">{departContinent ? "Choisir le pays..." : "D'abord le continent"}</option>
                        {departContinent && LOCATIONS[departContinent].map(p => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                </div>
              </div>

              {/* COLONNE ARRIVÉE */}
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-conte-orange" />
                    <h3 className="font-bold text-conte-blue">Destination (Arrivée)</h3>
                </div>

                {/* Select Continent Arrivée */}
                <div className="mb-3">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Continent</label>
                    <select 
                        required
                        className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-white focus:border-conte-orange outline-none"
                        value={arriveeContinent}
                        onChange={(e) => {
                            setArriveeContinent(e.target.value);
                            setArriveePays(""); 
                        }}
                    >
                        <option value="">Choisir...</option>
                        {Object.keys(LOCATIONS).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                {/* Select Pays Arrivée */}
                <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase">Pays</label>
                    <select 
                        required
                        disabled={!arriveeContinent}
                        className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-white disabled:bg-gray-100 disabled:text-gray-400 focus:border-conte-orange outline-none"
                        value={arriveePays}
                        onChange={(e) => setArriveePays(e.target.value)}
                    >
                        <option value="">{arriveeContinent ? "Choisir le pays..." : "D'abord le continent"}</option>
                        {arriveeContinent && LOCATIONS[arriveeContinent].map(p => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                </div>
              </div>

            </div>

            <div className="h-px bg-gray-100"></div>

            {/* --- 3. DÉTAILS --- */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Type d'Envoi</label>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {['Aérien ✈️', 'Maritime 🚢', 'GP / Colis 📦'].map((type) => (
                  <div key={type} 
                    onClick={() => setFormData({...formData, typeEnvoi: type})}
                    className={`cursor-pointer border-2 rounded-xl p-3 flex flex-col items-center justify-center transition-all ${formData.typeEnvoi === type ? 'border-conte-orange bg-orange-50 text-conte-orange' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <span className="font-bold text-sm text-center">{type}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Poids / Volume</label>
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
                    <label className="block text-sm font-bold text-gray-700 mb-2">Précisions (Optionnel)</label>
                    <input 
                        type="text" name="message" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-conte-orange outline-none"
                        placeholder="Nature de la marchandise..."
                        onChange={handleChange}
                    />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg">
              <Send className="w-6 h-6" />
              Obtenir ma cotation WhatsApp
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}