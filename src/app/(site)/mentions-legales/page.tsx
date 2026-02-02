import Header from "@/components/layout/Header";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Header />
      <div className="container mx-auto px-4 pt-32 max-w-4xl">
        <h1 className="text-3xl font-bold text-conte-blue mb-8">Mentions Légales</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-conte-orange mb-2">1. Éditeur du site</h2>
            <p>Le site <strong>Conte Cargo Navires Polyvalents</strong> est édité par l'entreprise Conte Cargo, spécialisée dans le transit maritime et aérien.</p>
            <p className="mt-2">
              <strong>Siège social :</strong> Sénégal / Italie<br/>
              <strong>Email :</strong> contecargonavirespolyvalents@gmail.com<br/>
              <strong>Téléphone :</strong> +221 78 506 09 13
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-conte-orange mb-2">2. Hébergement</h2>
            <p>Ce site est hébergé par <strong>Vercel Inc.</strong><br/>
            Adresse : 440 N Barranca Ave #4133 Covina, CA 91723, USA.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-conte-orange mb-2">3. Propriété Intellectuelle</h2>
            <p>Tous les contenus présents sur ce site (textes, images, vidéos, logos) sont la propriété exclusive de Conte Cargo ou de ses partenaires. Toute reproduction totale ou partielle est interdite sans autorisation préalable.</p>
          </section>
        </div>
      </div>
    </main>
  );
}