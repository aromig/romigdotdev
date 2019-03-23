<template>
  <Layout>
    <h2>Recent Articles</h2>
    <summary>
      <p>
        I like to write about things that I am currently learning or have been
        working on. If posts seem few and far between - I'll work on that, too.
      </p>
    </summary>
    <hr />
    <div class="post-list">
      <div
        v-for="post in $page.posts.edges"
        :key="post.node.id"
        class="post-item"
      >
        <g-link
          :to="post.node.path"
          class="post-cover-link"
          :aria-label="`Read more about ${post.node.title}`"
          :title="`Read more about ${post.node.title}`"
          ><g-image class="post-cover" :src="post.node.cover" />
        </g-link>
        <g-link
          :to="post.node.path"
          class="post-title"
          :aria-label="`Read more about ${post.node.title}`"
        >
          <span>{{ post.node.title }}</span>
        </g-link>

        <div class="post-date">{{ post.node.date }}</div>
        <p class="post-excerpt">{{ post.node.excerpt }}</p>
      </div>
    </div>
    <Pager :info="$page.posts.pageInfo" class="pager" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
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
}

.post-title {
  font-size: 1.2rem;
  font-weight: 400;
}

.post-date {
  font-weight: 300;
}

.post-cover {
  object-fit: cover;
  object-position: 0 0;
  width: 100%;
  max-height: 200px;
  border: 1px solid #444;
}

.pager {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
.pager a {
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

@media (max-width: 700px) {
  .pager {
    width: 100%;
  }
}
</style>
