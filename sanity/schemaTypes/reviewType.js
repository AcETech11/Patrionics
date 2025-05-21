import {UserIcon} from '@sanity/icons'
import { defineArrayMember, defineField, defineType} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'company', 
        title: 'Company Name/ Organization',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
          name: 'services',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: {type: 'service'}})],
          validation: (Rule) => Rule.required().min(1).max(2),
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
        name: 'rating',
        title: 'Rating',
        type: 'string',
        validation: (Rule) => Rule.required().min(1),
        options: {
          list: [
            { title: '⭐ Poor', value: '⭐ Poor' },
            { title: '⭐⭐ Fair', value: '⭐⭐ Fair' },
            { title: '⭐⭐⭐ Good', value: '⭐⭐⭐ Good' },
            { title: '⭐⭐⭐⭐ Very Good', value: '⭐⭐⭐⭐ Very_good' },
            { title: '⭐⭐⭐⭐⭐ Excellent', value: '⭐⭐⭐⭐⭐ Excellent' },
          ],
          layout: 'dropdown'
        }
      }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      description: 'Client Comment goes here',
      validation: (Rule) => Rule.required() && Rule.min(100),
    }),
    
  ],
preview: {
  select: {
    title: 'name',
    service: 'company',
    rating: 'rating',
    image: 'mainImage',
  },
  prepare(selection) {
    const { service, rating } = selection;
    return {
      ...selection,
      subtitle: service ? `for ${service} - ⭐ ${rating}` : `⭐ ${rating}`,
    };
  },
}
})