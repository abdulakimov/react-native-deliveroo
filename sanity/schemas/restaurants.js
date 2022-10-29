export default {
  name: "restaurants",
  title: "Restaurants",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
      options: {
        hotspot: true,
      },
    },
    {
      name: "lat",
      title: "Latitude of the Restaurant",
      type: "number",
    },
    {
      name: "long",
      title: "Longitude of the Restaurant",
      type: "number",
    },
    {
      name: "adress",
      type: "string",
      title: "Adress of the Restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a ratong from 1 to 5",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
    },
    {
      name: "type",
      type: "reference",
      title: "Category of the Restaurant",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes of the Restaurant",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
