<template>
  <Layout>
    <div
      v-for="post in $page.posts.edges"
      :key="post.node.id"
      class="latest-post"
    >
      <h2>Latest Post</h2>
      <g-link :to="post.node.path">
        <span class="post-title">{{ post.node.title }}</span>
        <br />
        {{ post.node.date }}
        <br />
        <p>{{ post.node.excerpt }}</p>
      </g-link>
    </div>
    <hr />
    <div class="latest-tweet">
      <Timeline
        :id="'penguingeek'"
        :sourceType="'profile'"
        :options="{
          tweetLimit: '1',
          linkColor: '#336699',
          showReplies: 'true',
          ariaPolite: 'polite'
        }"
      />
    </div>
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
.latest-post,
.latest-tweet {
  width: 80%;
  margin: 0 auto;
}

.latest-post {
  & a {
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

.post-title {
  font-size: 1.2rem;
  font-weight: 400;
}

hr {
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
</style>
