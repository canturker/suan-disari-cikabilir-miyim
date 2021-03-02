export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Şuan dışarı çıkabilir miyim?",
    htmlAttrs: {
      lang: "tr-TR"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-56N2JQJ2P3"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["kunodo/dist/kunodo.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~plugins/ga.js", mode: "client" },
    { src: "~plugins/ga2.js", mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  generate: {
    crawler: false,
    fallback: "404.html",
    routes: [
      "/",
      "/evet/1",
      "/evet/2",
      "/evet/3",
      "/evet/4",
      "/hayir/1",
      "/hayir/2",
      "/hayir/3",
      "/hayir/4"
    ]
  }
};
