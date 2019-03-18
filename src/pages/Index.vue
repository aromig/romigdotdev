<template>
  <Layout>
    <div class="intro">
      <p>
        Hello! I am a full-stack developer located in Dayton, Ohio. I enjoy
        coding &amp; learning what I can in order to make my team's and
        customers' lives easier.
      </p>
    </div>
    <div
      v-for="post in $page.posts.edges"
      :key="post.node.id"
      class="latest-post"
    >
      <h2>Latest Writing</h2>
      <g-link :to="post.node.path">
        <g-image class="latest-post-cover" :src="post.node.cover" />
        <span class="latest-post-title">{{ post.node.title }}</span>
        <br />
        {{ post.node.date }}
        <br />
        <p>{{ post.node.excerpt }}</p>
      </g-link>
    </div>
    <hr />
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (sortBy: "date", perPage: 1) {
    edges {
      node {
        title
        date(format: "D MMMM YYYY")
        excerpt
        content
        cover
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  metaInfo() {
    return {
      title: "Welcome",
      meta: [
        { name: "author", content: "Adam Romig" },
        { name: "description", content: "Personal Site & Blog for Adam Romig" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:description",
          content: "Personal Site & Blog for Adam Romig"
        },
        { name: "twitter:title", content: "Adam Romig" },
        { name: "twitter:site", content: "@penguingeek" },
        {
          name: "twitter:image",
          content: `${
            process.env.GRIDSOME_BASE_URLBaseUrl
          }/assets/images/romig_dev_cover.png`
        },
        { name: "twitter:creator", content: "@penguingeek" },
        // open-graph
        { property: "og:updated_time", content: "" },
        {
          property: "og:image",
          content: `${
            process.env.GRIDSOME_BASE_URL
          }/assets/images/romig_dev_cover.png`
        },
        {
          property: "og:image:secure_url",
          content: `${
            process.env.GRIDSOME_BASE_URL
          }/assets/images/romig_dev_cover.png`
        }
      ]
    };
  },
  components: {
    Pager
  }
};
</script>

<style lang="scss">
.latest-post {
  & a {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 15px;
    border: 0.5px dotted #fff;
    text-decoration: none;
    color: #444;
    display: block;
    &:hover {
      border: 0.5px dotted #444;
      color: #369;
    }
  }
}

.latest-post-cover {
  object-fit: cover;
  object-position: 0 0;
  width: 540px;
  max-height: 330px;
  border: 1px solid #444;
}

.latest-post-title {
  font-size: 1.2rem;
  font-weight: 400;
}
</style>
