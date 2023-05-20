export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  return $fetch(`${config.public.apiBase}/blogs/`, {
    headers: {
      Authorization: `Bearer ${config.apiSecret}`,
    },
    /* query: {
      "filters[active][$eq]": true,
      populate: "*",
    }, */
  });
});
