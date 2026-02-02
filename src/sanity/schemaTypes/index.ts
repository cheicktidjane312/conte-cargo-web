import { type SchemaTypeDefinition } from 'sanity'

// 👇 Maintenant que service.ts est corrigé, cette ligne va marcher (plus de rouge !)
import { service } from './service'

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
]