<template>
  <Layout>
    <section>
      <g-image
        class="project-item-cover"
        :src="$page.project.cover"
        style="display: none"
      />
      <h2 class="project-item-title">{{ $page.project.title }}</h2>
      <p class="project-item-stack">{{ $page.project.stack }}</p>
      <p class="project-item-date">{{ $page.project.date }}</p>
      <div class="project-item-content" v-html="$page.project.content" />
      <InfoCard />
    </section>
  </Layout>
</template>

<page-query>
query GraphicProject ($path: String!) {
  project: graphicProject (path: $path) {
    title
    date(format: "MMMM YYYY")
    content
    cover
    excerpt
    stack
  }
}
</page-query>

<script>
import InfoCard from "~/components/InfoCard.vue";

export default {
  metaInfo() {
    return {
      title: `Project : ${this.$page.project.title}`
    };
  },
  components: {
    InfoCard
  }
};
</script>

<style lang="scss">
.project-item-cover {
  object-fit: cover;
  object-position: 0 0;
  max-height: 400px;
  width: 100%;
}

.project-item-title {
  font-size: 1.75rem;
  font-weight: 400;
}

.project-item-stack {
  font-weight: 200;
}

.project-item-date {
  font-weight: 300;
}

.project-item-content a {
  color: #369;
}

.project-item-content pre {
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

.project-item-content code {
  font-size: 1rem;
}

.project-item-content img {
  display: block;
  margin: 0 auto;
  max-width: 85%;
}

@media (max-width: 700px) {
  .project-item-title {
    font-size: 1.35rem;
    font-weight: 400;
  }
  .project-item-content img {
    max-width: 95%;
  }
}
</style>