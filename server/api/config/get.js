export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  return $fetch(`${config.public.apiBase}/config`, {
    query: {
      "populate[0]": "seo.metaSocial",
      "populate[1]": "seo.metaImage",
      "populate[2]": "logo",
      "populate[3]": "map.markers",
    },
    headers: {
      Authorization: `Bearer ${config.apiSecret}`,
    },
  });
});
