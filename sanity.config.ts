import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

// Configuration directe avec tes identifiants
const projectId = 'p333aa85'
const dataset = 'production'

export default defineConfig({
  name: 'default',
  title: 'Conte Cargo Admin',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})