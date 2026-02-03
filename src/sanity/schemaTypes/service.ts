import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du Service',
      type: 'string',
    }),
    // 👇 CORRECTION ICI : J'ai remis 'poster' pour matcher avec tes données
    defineField({
      name: 'poster',
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