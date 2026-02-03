import { defineType, defineField } from 'sanity'

export const realisation = defineType({
  name: 'realisation',
  title: 'Arrivages & Réalisations',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la vidéo',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Petite description',
      type: 'text',
      rows: 3 // Pour que la case soit petite dans l'admin
    }),
    defineField({
      name: 'video',
      title: 'Fichier Vidéo',
      type: 'file',
      options: {
        accept: 'video/*'
      }
    })
  ],
})