<template>
  <Layout>
    <h2>Recent Articles</h2>

    <Pager :info="$page.posts.pageInfo" class="pager" />

    <div class="post-list">
      <div
        v-for="post in $page.posts.edges"
        :key="post.node.id"
        class="post-item"
      >
        <g-link
          class="post-link"
          :to="post.node.path"
          :aria-label="`Read more about ${post.node.title}`"
          :title="`Read more about ${post.node.title}`"
        >
          <g-image class="post-cover" :src="post.node.cover" />
          <h3 class="post-title">{{ post.node.title }}</h3>
          <span class="post-date">{{ post.node.date }}</span>
          <p class="post-excerpt">{{ post.node.excerpt }}</p>
        </g-link>
      </div>
    </div>
    <Pager :info="$page.posts.pageInfo" class="pager" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
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
        cover
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  & a {
    text-decoration: none;
  }
  .post-item {
    margin: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
    }
    .post-title {
      padding: 0 15px;
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0;
    }
    .post-date {
      padding: 0 15px;
      font-weight: 300;
    }
    .post-excerpt {
      padding: 0 15px;
      font-size: 85%;
      font-weight: 400;
    }
    .post-cover {
      object-fit: cover;
      object-position: 50% 50%;
      width: 100%;
      height: 200px;
      border: 1px solid #ccc;
    }
  }
}

.pager {
  width: 50%;
  margin: 0 auto 2rem;
  text-align: center;
  a {
    color: #369;
    text-decoration: none;
    padding-bottom: 5px;
    display: inline-block;
    width: 25px;
    margin: 0 5px;
    text-align: center;

    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s;
    &.active {
      border-bottom: 1px dashed rgba(51, 102, 153, 0.5);
    }
    &:hover {
      border-bottom: 1px solid #369;
      transition: border-bottom 0.3s;
    }
  }
}

@media (max-width: 700px) {
  .post-list {
    grid-template-columns: 1fr;
  }
  .pager {
    width: 100%;
  }
}
</style>
