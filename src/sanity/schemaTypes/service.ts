import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Nos Services (Affiches)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du Service',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'poster', // C'est ce champ qui doit apparaître
      title: 'Affiche / Créa du Service',
      type: 'image', // Type image
      options: {
        hotspot: true, // Important pour le recadrage
      },
      validation: (rule) => rule.required(),
    }),
  ],
})