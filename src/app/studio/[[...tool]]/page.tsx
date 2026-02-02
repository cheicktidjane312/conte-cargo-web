import { NextStudio } from 'next-sanity/studio';
// On ajuste le chemin pour trouver sanity.config.ts qui est à la racine
// ../../../ remonte de : [[...tool]] > studio > app > src > Racine
import config from '../../../../sanity.config';
export const dynamic = 'force-static';

// ✅ CORRECTION : On définit les métadonnées manuellement au lieu de les importer
export const metadata = {
  title: 'Conte Cargo Admin',
  description: 'Espace administration',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}