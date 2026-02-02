import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Services', // Ce qui s'affiche dans le menu
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du Service',
      type: 'string',
    }),
    defineField({
      name: 'flyer',
      title: 'Affiche / Flyer (Image)',
      type: 'image',
      options: {
        hotspot: true // Permet de recadrer l'image
      }
    }),
    defineField({
      name: 'description',
      title: 'Description courte',
      type: 'text',
    }),
  ],
})