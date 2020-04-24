const path = require("path");

// markdown configration
import Mode from "frontmatter-markdown-loader/mode";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  typographer: true
});

// site config stuff
import fs from "fs";
import YAML from "yaml";
var file = fs.readFileSync("./siteConfig.yml", "utf8");
var siteConfig = YAML.parse(file);

var guides = siteConfig.guides
var routes = []


guides.forEach((slug) => {
  routes.push(`/guides/${slug}`);
});

export default {
  // for Now.sh hosting
  // buildDir: 'dist',
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + siteConfig.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: siteConfig.desc
      },
      { property: "theme-color", hid: "theme-color", content: "#000000" },
      { property: "twitter:title", hid: "twitter:title", content: "NextBus SG" },
      { property: "twitter:description", hid: "twitter:description", content: "A bus timings and public transport app for Singapore, with extra features" },
      { property: "twitter:image:src", hid: "twitter:image", content: "/social-preview.png" },
      { property: "twitter:card", hid: "twitter:card", content: "summary_large_image" },

      { property: "og:title", hid: "og:title", content: "NextBus SG" },
      { property: "og:description", hid: "og:description", content: "A bus timings and public transport app for Singapore, with extra features" },
      { property: "og:image", hid: "og:image", content: "/wa-preview.png" },
      { property: "og:url", hid: "og:url", content: "https://nextbus.now.sh/" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/globalComponents.js", "~/plugins/siteConfig.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["assets/styles/variables.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // for reading markdown files
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          // include: path.resolve(__dirname, 'content'),
          options: {
            mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT, Mode.BODY],
            vue: {
              // root: "dynamicMarkdown"
            },
            markdown(body) {
              return md.render(body);
            }
          }
        },

        {
          test: /\.ya?ml$/,
          type: "json",
          use: "yaml-loader"
        }
      );
    }
  },

  generate: {
    dir: "dist",
    routes: routes
  }
};
