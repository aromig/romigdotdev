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
      meta: [
        { name: "author", content: "Adam Romig" },
        // Twitter card
        { name: "description", content: this.$page.post.excerpt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.excerpt },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@penguingeek" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@penguingeek" },
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
  object-position: 0 0;
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
  h2 {
    text-decoration: underline;
    text-decoration-skip-ink: auto;
  }
  a {
    color: #369;
    text-decoration: underline;
  }
  pre:not(.shiki) {
    background-color: #1e1e1e;
    color: #ddd;
  }
  pre,
  pre.shiki {
    max-width: 700px;
    overflow-x: scroll;
    word-wrap: break-word;
    padding: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  code {
    font-size: 0.9rem;
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

@media (max-width: 700px) {
  .post-title {
    font-size: 1.35rem;
    font-weight: 400;
  }
  .post-content img {
    max-width: 95%;
  }
}
</style>