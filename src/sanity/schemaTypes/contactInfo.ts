import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: '⚙️ Informations de Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre (Pour se repérer)',
      type: 'string',
      initialValue: 'Mes Coordonnées',
      readOnly: true,
    }),
    // SECTION TÉLÉPHONES
    defineField({
      name: 'phoneNumbers',
      title: 'Numéros de Téléphone',
      type: 'array',
      description: 'Ajoutez ici tous les numéros de contact.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'country', type: 'string', title: 'Pays (Ex: Sénégal)' },
            { name: 'flag', type: 'string', title: 'Drapeau (Emoji 🇸🇳)' },
            { name: 'number', type: 'string', title: 'Numéro (Format international: +221...)' },
          ]
        }
      ]
    }),
    // SECTION EMAIL & RÉSEAUX
    defineField({
      name: 'email',
      title: 'Adresse Email',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Lien Page Facebook',
      type: 'url',
    }),
    // SECTION ADRESSES PHYSIQUES
    defineField({
      name: 'addresses',
      title: 'Adresses des Agences',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'city', type: 'string', title: 'Ville / Pays' },
            { name: 'details', type: 'string', title: 'Adresse précise' },
          ]
        }
      ]
    }),
 // ... (après le champ addresses)
    defineField({
      name: 'mapUrl',
      title: 'Lien Carte Google Maps (Embed)',
      type: 'text', // On utilise text car les liens Google Maps sont très longs
      description: 'Allez sur Google Maps > Cliquez sur Partager > Intégrer une carte > Copiez UNIQUEMENT le lien qui est entre les guillemets (https://www.google.com/maps/embed?...)',
    }),
  ],
})