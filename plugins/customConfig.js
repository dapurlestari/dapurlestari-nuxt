export default defineNuxtPlugin(async (nuxtApp) => {
    console.log(`App Name: ${nuxtApp.globalName}`);
    const { data } = await useFetch('/api/config/get')
    
    const config = useRuntimeConfig()
    // console.log(data.value)
    const configData = data.value.data
    console.log(configData.attributes.logo.data.attributes.url)
    const logoURL = config.public.baseURL+configData.attributes.logo.data.attributes.url
    // console.log(logoURL);

    
    return {
        provide: {
            myConfig: configData.attributes,
            logo: logoURL
        }
    }
})