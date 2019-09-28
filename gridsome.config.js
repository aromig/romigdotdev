// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  metadata: {
    siteName: "Adam Romig",
    siteUrl: "https://romig.dev",
    siteDescription: "Personal Site & Blog for Adam Romig"
  },
  templates: {
    Post: "/blog/:title",
    Project: "/projects/:title",
    GraphicProject: "/projects/g/:title"
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    }
  },
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-137082739-1"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [["gridsome-plugin-remark-shiki", { theme: "light_vs" }]]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects-web/**/*.md",
        typeName: "Project",
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
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [["gridsome-plugin-remark-shiki", { theme: "dark_plus" }]]
        }
      }
    },
    {
      use: "gridsome-plugin-netlify-cms",
      options: {
        publicPath: "/admin"
      }
    }
  ]
};
