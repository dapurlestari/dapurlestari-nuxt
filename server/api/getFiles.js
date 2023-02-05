export default defineEventHandler(async (event) => {
    const { apiSecret } = useRuntimeConfig()
    return $fetch('https://panel.dapurlestari.id/api/upload/files', {
        headers: {
            Authorization: `Bearer ${apiSecret}`
        }
    })
})