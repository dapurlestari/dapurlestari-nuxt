export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    return $fetch(`${config.public.apiBase}/config`, {
        query: {
            'populate[0]': 'seo.metaSocial',
            'populate[1]': 'seo.metaImage',
            'populate[2]': 'logo',
        },
        headers: {
            Authorization: `Bearer ${config.apiSecret}`
        }
    })
})