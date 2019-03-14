<template>
  <Layout>
    <h2 class="post-title">{{ $page.post.title }}</h2>
    <h3 class="post-excerpt">{{ $page.post.excerpt }}</h3>
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
      title: this.$page.post.title
    };
  }
};
</script>

<style lang="scss">
.post-content p,
.post-content li {
  font-size: 1.2rem;
  font-family: "Segoe UI";
}

h2,
h3 {
  font-weight: 400;
}

.post-title {
  font-size: 1.75rem;
  font-weight: 400;
}

.post-excerpt {
  font-weight: 300;
}

.post-date {
  border-left: 1px solid #ccc;
  padding-left: 15px;
}

.post-content a {
  color: #369;
}

.post-content hr {
  border: 0;
  display: block;
  text-align: center;
  &::before {
    content: "• • •";
    display: inline-block;
    color: #444;
    font-size: 2rem;
    font-weight: 300;
  }
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
  max-width: 100%;
}
</style>