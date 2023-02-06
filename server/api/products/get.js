export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    return $fetch(`${config.public.apiBase}/products/?populate=*`, {
        headers: {
            Authorization: `Bearer ${config.apiSecret}`
        }
    })
})