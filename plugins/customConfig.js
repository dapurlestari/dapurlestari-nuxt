// markdown-it nuxt: https://github.com/nuxt-community/markdownit-module/issues/47
import mdit from "markdown-it";
const markdownit = new mdit({
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
});
markdownit.linkify.set({ fuzzyEmail: false });

const navMenu = [
  {
    title: "Home",
    icon: "lni lni-home",
    route: "/",
  },
  {
    title: "Store",
    icon: "lni lni-restaurant",
    route: "/store",
  },
  {
    title: "Blog",
    icon: "lni lni-book",
    route: "/blog",
  },
  {
    title: "About",
    icon: "lni lni-question-circle",
    route: "/about",
  },
];

function formatPhoneNumberID(phoneNumberString) {
  // Menghapus semua karakter selain angka
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");

  // Jika nomor telepon dimulai dengan 0, mengubah menjadi +62
  if (cleaned.charAt(0) === "0") {
    cleaned = "+62 " + cleaned.substring(1);
  }

  // Mencocokkan dengan format telepon Indonesia
  var match = cleaned.match(/^\+?(62|0)([1-9][0-9]{8,11})$/);

  // Jika cocok dengan format Indonesia, mengembalikan format nomor telepon dengan spasi
  if (match) {
    return (
      "+" +
      match[1] +
      " " +
      match[2].replace(/(\d{3})(\d{4})(\d{2,3})/, "$1 $2 $3")
    );
  }

  // Jika tidak cocok dengan format Indonesia, mengembalikan nomor asli
  return phoneNumberString;
}

export default defineNuxtPlugin(async (nuxtApp) => {
  console.log(`App Name: ${nuxtApp.globalName}`);
  const { data } = await useFetch("/api/config/get");
  const { data: social } = await useFetch("/api/socials/get");

  const config = useRuntimeConfig();
  // console.log(social)
  const configData = data.value.data;
  // console.log(configData.attributes.logo.data.attributes.url);
  const logoURL =
    config.public.baseURL + configData.attributes.logo.data.attributes.url;
  // console.log(logoURL);

  return {
    provide: {
      myConfig: configData.attributes,
      socials: social.value.data,
      logo: logoURL,
      mdit: markdownit,
      navMenu: navMenu,
      formatDate: (datetime) => {
        var date = new Date(datetime);
        var options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "Asia/Jakarta",
        };

        return date.toLocaleDateString("en-US", options);
      },
      formatPrice: (number) => {
        return `Rp. ${Intl.NumberFormat("id-ID", {
          maximumSignificantDigits: 3,
          currency: "IDR",
        }).format(number)}`;
      },
      formatPhoneNumberID: (number) => formatPhoneNumberID(number),
      placeholderImageURL: (
        label,
        width,
        height,
        bgColor,
        fgColor,
        font,
        retina
      ) => {
        return `https://placehold.co/${width ?? "300"}x${height ?? 200}/${
          bgColor ?? "cacaca"
        }/${fgColor ?? "444444"}${retina || ""}/jpg?text=${
          label ?? "Image"
        }&font=${font ?? "montserrat"}`;
        // return 'https://placehold.co/600x400@2x.jpg?text=Hello%20World&font=montserrat';
      },
    },
  };
});
