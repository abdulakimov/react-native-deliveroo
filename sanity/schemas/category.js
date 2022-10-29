export default {
  name: "category",
  title: "Menu category",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of category",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of category",
    },
  ],
};
