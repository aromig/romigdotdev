// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Adam Romig",
  siteUrl: "https://romig.dev",
  siteDescription: "Personal Site & Blog for Adam Romig",
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        route: "/blog/:slug",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [["gridsome-plugin-remark-shiki", { theme: "dark_plus" }]]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects-web/**/*.md",
        typeName: "Project",
        route: "/projects/:slug",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [["gridsome-plugin-remark-shiki", { theme: "dark_plus" }]]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects-graphics/**/*.md",
        typeName: "GraphicProject",
        route: "/projects/g/:slug",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [["gridsome-plugin-remark-shiki", { theme: "dark_plus" }]]
        }
      }
    }
  ]
};
