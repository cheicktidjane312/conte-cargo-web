import { type SchemaTypeDefinition } from 'sanity'

// Maintenant que les fichiers sont corrigés, ces imports vont marcher :
import { service } from './service'
import { realisation } from './realisation'
import { contact } from './contact'

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  realisation,
  contact,
]