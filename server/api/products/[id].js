export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const config = useRuntimeConfig()
    return $fetch(`${config.public.apiBase}/products/find-by-slug/${id}/?populate=*`, {
        headers: {
            Authorization: `Bearer ${config.apiSecret}`
        }
    })
})