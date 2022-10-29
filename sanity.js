import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "w5r0w112",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
  token:
    process.env.SANITY_TOKEN ||
    "sk2YBYCga3IWzqm0HR2rVW6Fv1LBCPIMKpIXeg3BxsNCWhc7b2XLKT5qmouAkpIDyeLx8XROTdwldDUCrQd60dKrfWMNa0LKJM3wfkK07cmkc6U3A3mv4t02Al0vzc0BLdxDjMYL0sAlphQieFHx6YOESJMsPUksddSqxeVi2JsJTzxGhf1P",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export default client;
