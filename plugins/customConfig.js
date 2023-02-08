export default defineNuxtPlugin(async (nuxtApp) => {
    console.log(`App Name: ${nuxtApp.globalName}`);
    const { data } = await useFetch('/api/config/get')
    const { data: social } = await useFetch('/api/socials/get')
    
    const config = useRuntimeConfig()
    // console.log(social)
    const configData = data.value.data
    console.log(configData.attributes.logo.data.attributes.url)
    const logoURL = config.public.baseURL+configData.attributes.logo.data.attributes.url
    // console.log(logoURL);

    
    return {
        provide: {
            myConfig: configData.attributes,
            socials: social.value.data,
            logo: logoURL,
            formatPrice: (number) => {
                return new Intl.NumberFormat('id-ID', {
                    maximumSignificantDigits: 3,
                    currency: 'IDR',
                }).format(number)
            }
        }
    }
})