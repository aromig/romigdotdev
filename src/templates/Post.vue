<template>
  <Layout>
    <g-image class="post-cover" :src="$page.post.cover" />
    <h2 class="post-title">{{ $page.post.title }}</h2>
    <p class="post-excerpt">{{ $page.post.excerpt }}</p>
    <p class="post-date">{{ $page.post.date }}</p>
    <div class="post-content" v-html="$page.post.content" />
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
        coverImage = `${process.env.GRIDSOME_BASE_URL}${this.$page.post.cover}`;
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
  font-family: Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
}

.post-content a {
  color: #369;
}

.post-content pre {
  max-width: 700px;
  overflow-x: scroll;
  /*white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-pre-wrap;
  white-space: -o-pre-wrap;*/
  word-wrap: break-word;
  padding: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}

.post-content code {
  font-size: 1rem;
}

.post-content img {
  display: block;
  margin: 0 auto;
  max-width: 85%;
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