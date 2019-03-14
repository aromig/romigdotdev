<template>
  <Layout>
    <h2>Blog</h2>
    <div class="post-list">
      <div
        v-for="post in $page.posts.edges"
        :key="post.node.id"
        class="post-item"
      >
        <g-link :to="post.node.path">
          <span class="post-title">{{ post.node.title }}</span>
          <br />
          {{ post.node.date }}
          <br />
          <p>{{ post.node.excerpt }}</p>
        </g-link>
      </div>
    </div>
    <Pager :info="$page.posts.pageInfo" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 5, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        excerpt
        date (format: "D MMMM YYYY")
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
      title: "Blog"
    };
  },
  components: {
    Pager
  }
};
</script>

<style lang="scss" scoped>
.post-list {
  list-style-type: none;
  & a {
    text-decoration: none;
    color: #444;
  }
}

.post-item {
  border-left: 1px solid #ccc;
  padding-left: 15px;
  &:hover {
    border-left: 1px solid #369;
    padding-left: 15px;
  }
  &:hover a {
    color: #369;
  }
  & a {
    display: block;
  }
}

.post-title {
  font-size: 1.2rem;
  font-weight: 400;
}
</style>
