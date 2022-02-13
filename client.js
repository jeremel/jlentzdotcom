import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "x3eb0hba",
  dataset: "production",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});
