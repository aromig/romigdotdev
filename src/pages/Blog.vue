<template>
  <Layout>
    <h2>Recent Articles</h2>

    <div class="post-list">
      <div
        v-for="post in $page.posts.edges"
        :key="post.node.id"
        class="post-item"
      >
        <g-image class="post-cover" :src="post.node.cover" />
        <h3 class="post-title">{{ post.node.title }}</h3>
        <span class="post-date">{{ post.node.date }}</span>
        <p class="post-excerpt">{{ post.node.excerpt }}</p>
        <g-link
          :to="post.node.path"
          class="post-link"
          :aria-label="`Read more about ${post.node.title}`"
          :title="`Read more about ${post.node.title}`"
          >Read More
        </g-link>
        <hr class="post-divider" />
      </div>
    </div>
    <Pager :info="$page.posts.pageInfo" class="pager" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 4, page: $page) @paginate {
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
  list-style-type: none;
  & a:not(.post-cover-link) {
    text-decoration: none;
    color: #369;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s;
    &:hover {
      border-bottom: 1px solid #369;
      transition: border-bottom 0.3s;
    }
  }
  .post-item {
    .post-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0;
    }
    .post-date {
      font-weight: 300;
    }
    .post-excerpt {
      font-weight: 400;
    }
    .post-link {
      text-transform: uppercase;
      font-weight: 600;
    }
    .post-cover {
      object-fit: cover;
      object-position: 50% 50%;
      width: 100%;
      max-height: 150px;
      border: 1px solid #ccc;
    }
    hr.post-divider {
      margin: 0.5rem 0 2rem;
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
  .pager {
    width: 100%;
  }
}
</style>
