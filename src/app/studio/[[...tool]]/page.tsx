import { NextStudio } from 'next-sanity/studio';
// 👇 CORRECTION : 4 ".." seulement, pas 5 !
import config from '../../../../sanity.config';

// 👇 DOUBLE SÉCURITÉ : On force le dynamique des deux façons possibles
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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