export default {
  name: "featured",
  title: "Featured Menu category",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurant",
      type: "array",
      title: "Restaurant",
      of: [{ type: "reference", to: [{ type: "restaurants" }] }],
    },
  ],
};
