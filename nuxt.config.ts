import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  //   modules: [["@nuxtjs/axios", { proxyHeaders: false }], "@nuxtjs/proxy"],
  css: ["@/assets/css/main.css"],
  scripts: [],
  plugins: [
    { src: "~/assets/js/vendor/modernizr-3.6.0.min.js", mode: "client" },
    { src: "~/assets/js/vendor/jquery-3.6.0.min.js", mode: "client" },
    { src: "~/assets/js/vendor/jquery-migrate-3.3.0.min.js", mode: "client" },
    { src: "~/assets/js/vendor/bootstrap.bundle.min.js", mode: "client" },
    { src: "~/assets/js/main.js?v=4.0", mode: "client" },
    { src: "~/assets/js/plugins/slick.js", mode: "client" },
    { src: "~/assets/js/plugins/jquery.syotimer.min.js", mode: "client" },
    { src: "~/assets/js/plugins/waypoints.js", mode: "client" },
    { src: "~/assets/js/plugins/wow.js", mode: "client" },
    { src: "~/assets/js/plugins/perfect-scrollbar.js", mode: "client" },
    { src: "~/assets/js/plugins/magnific-popup.js", mode: "client" },
    { src: "~/assets/js/plugins/select2.min.js", mode: "client" },
    { src: "~/assets/js/plugins/counterup.js", mode: "client" },
    { src: "~/assets/js/plugins/jquery.countdown.min.js", mode: "client" },
    { src: "~/assets/js/plugins/images-loaded.js", mode: "client" },
    { src: "~/assets/js/plugins/isotope.js", mode: "client" },
    { src: "~/assets/js/plugins/scrollup.js", mode: "client" },
    { src: "~/assets/js/plugins/jquery.vticker-min.js", mode: "client" },
    { src: "~/assets/js/plugins/jquery.theia.sticky.js", mode: "client" },
    { src: "~/assets/js/plugins/jquery.elevatezoom.js", mode: "client" },
    { src: "~/assets/js/shop.js?v=4.0", mode: "client" },
  ],
});
