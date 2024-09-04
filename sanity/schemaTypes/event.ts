export default {
    name: 'event',
    type: 'document',
    title: 'Events',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of Event',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of Event',
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
        name: 'location',
        type: 'string',
        title: 'Location',
      },
      {
        name: 'building',
        type: 'string',
        title: 'Building / Landmark',
      },
      {
        name: 'link',
        type: 'url',
        title: 'Event Link to Luma/EventBrite',
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
    ],
  }
  