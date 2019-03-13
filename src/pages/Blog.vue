<template>
  <Layout>
    <p v-for="post in $page.posts.edges" :key="post.node.id">
      <g-link :to="post.node.path">
        {{ post.node.title }}
      </g-link>
    </p>
    <Pager :info="$page.posts.pageInfo" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 2, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
