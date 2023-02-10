// markdown-it nuxt: https://github.com/nuxt-community/markdownit-module/issues/47
// import hljs  from 'highlight.js';
import mdit from 'markdown-it';

// import sub from 'markdown-it-sub';
// import sup from 'markdown-it-sup';
// import fn from 'markdown-it-footnote';
// import emo from 'markdown-it-emoji';
// import def from 'markdown-it-deflist';
// import ins from 'markdown-it-ins';
// import container from 'markdown-it-container';

const markdownit = new mdit({
    html:         true,
    xhtmlOut:     false,
    breaks:       false,
    langPrefix:   'language-',
    linkify:      true,
    typographer:  true,
    quotes: '“”‘’',
  })
//   .use(sub)
//   .use(sup)
//   .use(fn)
//   .use(emo)
//   .use(def)
//   .use(ins)
//   .use(container,'codeblock',{marker:'@'});
  
markdownit.linkify.set({ fuzzyEmail: false });

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
            mdit: markdownit,
            formatPrice: (number) => {
                return `Rp. ${Intl.NumberFormat('id-ID', {
                    maximumSignificantDigits: 3,
                    currency: 'IDR',
                }).format(number)}`
            },
            placeholderImageURL: (label, width, height, bgColor, fgColor, font, retina) => {
                return `https://placehold.co/${width ?? '300'}x${height ?? 200}/${bgColor ?? 'cacaca'}/${fgColor ?? '444444'}${retina || ''}/jpg?text=${label ?? 'Image'}&font=${font ?? 'montserrat'}`
                // return 'https://placehold.co/600x400@2x.jpg?text=Hello%20World&font=montserrat';
            }
        }
    }
})