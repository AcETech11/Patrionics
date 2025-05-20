import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'service',
      type: 'reference',
      to: {type: 'service'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'example: Lekki, lagos',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
      description: 'Short Word Description of the project',
      validation: (Rule) => Rule.required() && Rule.max(100),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'project_categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'project_category'}})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      type: 'blockContent',
     validation: (Rule) => Rule.required(), 
    }),
    
  ],
  preview: {
    select: {
      title: 'title',
      service: 'service.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {service} = selection
      return {...selection, subtitle: service && `for ${service}`}
    },
  },
})
