<template>
  <Layout>
    <section>
      <header>
        <g-image class="post-cover" :src="$page.post.cover" />
        <h2 class="post-title">{{ $page.post.title }}</h2>
      </header>
      <summary>
        <p class="post-excerpt">{{ $page.post.excerpt }}</p>
      </summary>
      <article>
        <p class="post-date">{{ $page.post.date }}</p>
        <div class="post-content" v-html="$page.post.content" />
      </article>
    </section>
    <InfoCard />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    excerpt
    date (format:"D MMMM YYYY")
    content
    cover
  }
}
</page-query>

<script>
import InfoCard from "~/components/InfoCard.vue";

export default {
  components: {
    InfoCard
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      titleTemplate: "%s | romig.dev",
      meta: [
        { name: "author", content: "Adam Romig" },
        // Twitter card
        { name: "description", content: this.$page.post.excerpt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.excerpt },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@adam_romig" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@adam_romig" },
        // open-graph
        { property: "og:updated_time", content: this.$page.post.date },
        { property: "og:image", content: this.getCoverImage },
        { property: "og:image:secure_url", content: this.getCoverImage }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
  computed: {
    getCoverImage() {
      let coverImage = "";
      const cover = this.$page.post.cover;
      if (cover !== null) {
        coverImage = `https://romig.dev/${this.$page.post.cover}`;
      }
      return coverImage;
    }
  }
};
</script>

<style lang="scss">
.post-cover {
  object-fit: cover;
  object-position: center;
  width: 100%;
  max-height: 330px;
  border: 1px solid #444;
}

.post-title {
  font-size: 1.75rem;
  font-weight: 400;
}

.post-excerpt {
  font-weight: 200;
}

.post-date {
  font-weight: 300;
}

.post-content {
  a {
    color: #369;
    text-decoration: underline;
  }
  pre:not(.shiki) {
    background-color: #fff;
    color: #222;
  }
  pre,
  pre.shiki {
    max-width: 700px;
    overflow-x: scroll;
    word-wrap: break-word;
    padding: 10px;
    border: 0.5px solid #ccc;
    //box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    //border-radius: 5px;
  }
  code {
    font-size: 14px; //  0.9rem;
    font-family: "Dank Mono", "Fira Code", Inconsolata, "Source Code Pro",
      monospace;
    &.shiki-inline {
      font-size: 1rem;
      font-family: "Dank Mono", "Fira Code", Inconsolata, "Source Code Pro",
        monospace;
      padding: 0.2rem;
    }
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 85%;
  }
  ul {
    margin-left: -15px;
    li {
      margin: 10px 0;
    }
    li > p {
      margin: 0;
    }
  }
  .fiddle_container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
      height: 100%;
      width: 100%;
    }
  }
}

img + em, /* not supported yet! -> [ a:has(> img) + em ] so will use this instead*/ a + em {
  font-style: normal;
  display: inherit;
  text-align: center;
  font-size: 80%;
}

blockquote {
  margin: 0 10px;
  padding-left: 20px;
  border-left: 2px solid #999;
  p {
    font-size: 1.25rem;
    font-style: italic;
  }
}

.tweet-container {
  max-width: 500px;
  margin: 0 auto;
}

details {
  border: 0.5px solid #ccc;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  box-shadow: 2px 2px 3px rgba(150, 150, 150, 0.25);
  & > summary {
    cursor: pointer;
    border: 0.5px solid #fff;
    &:hover {
      border: 0.5px dotted #369;
    }
  }
}

.circle-crop {
  border-radius: 50%;
}

@media (min-width: 700px) {
  .post-content {
    .article_nav,
    .article_aside {
      float: right;
      width: 250px;
      margin-left: 10px;
      padding: 15px;
      // border: 0.5px solid #ccc;
      // box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
      ul {
        list-style-type: square;
        li {
          margin: 5px 0;
          a {
            text-decoration: none;
          }
        }
      }
    }
    .article_photo {
      float: right;
    }
  }
}

@media (max-width: 700px) {
  .post-title {
    font-size: 1.35rem;
    font-weight: 400;
  }
  .post-content {
    .article_nav,
    .article_aside {
      padding: 15px;
      // border: 0.5px solid #ccc;
      // border-left: none;
      // border-right: none;
      ul {
        list-style-type: square;
        li {
          margin: 5px 0;
          a {
            text-decoration: none;
          }
        }
      }
    }
    .article_photo {
      margin: auto;
    }
    img {
      max-width: 95%;
    }
  }
}
</style>
