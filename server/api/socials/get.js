export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    return $fetch(`${config.public.apiBase}/social-medias/?populate=*`, {
        headers: {
            Authorization: `Bearer ${config.apiSecret}`
        }
    })
})