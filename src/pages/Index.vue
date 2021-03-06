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
      <g-link
        :to="post.node.path"
        :aria-label="`Read more about ${post.node.title}`"
      >
        <g-image
          class="latest-post-cover"
          :src="post.node.cover"
          :title="`Read more about ${post.node.title}`"
        />
        <h3 class="latest-post-title">{{ post.node.title }}</h3>
        <small>{{ post.node.date }}</small>
        <p>{{ post.node.excerpt }}</p>
      </g-link>
    </div>
    <hr />
    <div
      v-for="project in $static.projects.edges"
      :key="project.node.id"
      class="latest-post"
    >
      <h2>Latest Project</h2>
      <g-link
        :to="project.node.path"
        :aria-label="`Read more about ${project.node.title}`"
      >
        <g-image
          class="latest-post-cover"
          :src="project.node.cover"
          :title="`Read more about ${project.node.title}`"
        />
        <h3 class="latest-post-title">{{ project.node.title }}</h3>
        <small>{{ project.node.date + " • " + project.node.stack }}</small>
        <p>{{ project.node.excerpt }}</p>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (sortBy: "date", order: DESC, perPage: 1) {
    edges {
      node {
        title
        date(format: "D MMMM YYYY")
        excerpt
        cover
        path
      }
    }
  }
}
</page-query>

<static-query>
query Projects {
  projects: allProject (sortBy: "date", order: DESC, perPage: 1) {
    edges {
      node {
        id
        title
        date(format: "MMMM YYYY")
        stack
        excerpt
        cover
        path
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Home",
      titleTemplate: "%s | romig.dev",
      meta: [
        { name: "author", content: "Adam Romig" },
        { name: "description", content: "Personal Site & Blog for Adam Romig" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:description",
          content: "Personal Site & Blog for Adam Romig"
        },
        { name: "twitter:title", content: "Adam Romig" },
        { name: "twitter:site", content: "@adam_romig" },
        {
          name: "twitter:image",
          content: "https://romig.dev/assets/images/project/romig_dev_cover.png"
        },
        { name: "twitter:creator", content: "@adam_romig" },
        // open-graph
        { property: "og:updated_time", content: "" },
        {
          property: "og:image",
          content: "https://romig.dev/assets/images/project/romig_dev_cover.png"
        },
        {
          property: "og:image:secure_url",
          content: "https://romig.dev/assets/images/project/romig_dev_cover.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.latest-post {
  .latest-post-cover {
    object-fit: cover;
    object-position: center;
    width: 100%;
    max-height: 330px;
    border: 1px solid #444;
  }

  .latest-post-title {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  }
  a {
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

@media (max-width: 700px) {
  .latest-post-cover {
    width: 100%;
  }
}
</style>
