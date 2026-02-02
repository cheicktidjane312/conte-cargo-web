import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config' // 4 points = retour à la racine

// On force le mode dynamique pour éviter que Vercel essaie de "deviner" la page
export const dynamic = 'force-dynamic'

// Plus besoin d'exporter metadata ici, c'est géré par le nouveau layout !

export default function StudioPage() {
  return <NextStudio config={config} />
}