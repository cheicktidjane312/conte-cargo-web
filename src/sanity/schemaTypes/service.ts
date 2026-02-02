import { defineType, defineField } from 'sanity'

// 👇 REMARQUE BIEN : "export const service" (et pas "export default")
export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du service',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})