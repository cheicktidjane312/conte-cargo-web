import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'arrivage',
  title: 'Arrivages & Réalisations',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de l\'arrivage',
      type: 'string',
      description: 'Ex: Arrivage du 12 Février - Conteneur GN',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Lien automatique)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Photo Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // C'EST ICI QUE ÇA CHANGE : TYPE FILE
    defineField({
      name: 'videoFile',
      title: 'Fichier Vidéo',
      type: 'file',
      options: {
        accept: 'video/*', // Accepte uniquement les fichiers vidéo (mp4, mov, etc.)
      },
      description: 'Télécharge la vidéo directement ici (Attention aux fichiers trop lourds pour le chargement du site).',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Détails sur l\'arrivage ou le chargement...',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: (new Date()).toISOString(),
    }),
  ],
})