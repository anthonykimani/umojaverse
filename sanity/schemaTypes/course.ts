export default {
  name: 'course',
  type: 'document',
  title: 'Course',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Course ',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of Course article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'Image Url',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'category',
      type: 'object',
      title: 'Category',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
      ],
    },
    {
      name: 'author',
      type: 'object',
      title: 'Author',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'role',
          type: 'string',
          title: 'Role',
        },
        {
          name: 'imageUrl',
          type: 'image',
          title: 'Image Url',
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      title: 'content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
