module.exports = {
  title: "Whit Huntley",
  description: "Whit Huntley's website",
  head: [["link", { rel: "icon", href: `/profile.jpg` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Résumé", link: "/resume/" },
      { text: "Education", link: "/edu/" }
    ],
    lastUpdated: 'Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};
