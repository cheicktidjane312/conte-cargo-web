import Header from "@/components/layout/Header";

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Header />
      <div className="container mx-auto px-4 pt-32 max-w-4xl">
        <h1 className="text-3xl font-bold text-conte-blue mb-8">Politique de Confidentialité</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6 text-gray-700">
          <p>La protection de vos données personnelles est une priorité pour <strong>Conte Cargo</strong>. Cette politique explique comment nous traitons vos informations.</p>

          <section>
            <h2 className="text-xl font-bold text-conte-orange mb-2">1. Collecte des données</h2>
            <p>Nous collectons les informations que vous nous fournissez volontairement via nos formulaires de contact et de devis :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nom et Prénom</li>
              <li>Numéro de téléphone (pour contact WhatsApp)</li>
              <li>Informations relatives à vos expéditions (Poids, Volume, Trajet)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-conte-orange mb-2">2. Utilisation des données</h2>
            <p>Vos données sont utilisées uniquement pour :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Répondre à vos demandes de cotation.</li>
              <li>Organiser le transport de vos marchandises.</li>
              <li>Vous contacter en cas de besoin concernant votre expédition.</li>
            </ul>
            <p className="mt-2 font-medium">Nous ne vendons jamais vos données à des tiers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-conte-orange mb-2">3. Vos Droits</h2>
            <p>Conformément aux lois en vigueur, vous disposez d'un droit d'accès, de modification et de suppression de vos données. Pour exercer ce droit, contactez-nous par email à : contecargonavirespolyvalents@gmail.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
}