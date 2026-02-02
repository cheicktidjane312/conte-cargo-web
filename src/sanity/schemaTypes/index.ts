import { type SchemaTypeDefinition } from 'sanity'
import service from './service'
import arrivage from './arrivage'
import contactInfo from './contactInfo' // <--- 1. IMPORT ICI

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, arrivage, contactInfo], // <--- 2. AJOUT ICI
}