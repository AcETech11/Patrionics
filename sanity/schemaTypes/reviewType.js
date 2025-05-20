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
        name: 'rating',
        title: 'Rating',
        type: 'string',
        validation: (Rule) => Rule.required().min(1),
        options: {
          list: [
            { title: '⭐ Poor', value: 'poor' },
            { title: '⭐⭐ Fair', value: 'fair' },
            { title: '⭐⭐⭐ Good', value: 'good' },
            { title: '⭐⭐⭐⭐ Very Good', value: 'very_good' },
            { title: '⭐⭐⭐⭐⭐ Excellent', value: 'excellent' },
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
    // defineField({
    //   name: 'mainImage',
    //   type: 'image',
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     defineField({
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative text',
    //     })
    //   ]
    // }),
  ],
  preview: {
    select: {
      title: 'name',
      service: 'company',
      review: 'review',
    },
    prepare(selection) {
      const {service} = selection
      return {...selection, subtitle: rating && `for ${service}`}
    },
  },
})