export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    return $fetch(`${config.public.apiBase}/product-page`, {
        query: {
            'populate': 'deep',
        },
        headers: {
            Authorization: `Bearer ${config.apiSecret}`
        }
    })
})