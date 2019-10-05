<template>
  <Layout>
    <section>
      <h2 class="project-item-title">{{ $page.project.title }}</h2>
      <p class="project-item-date-stack">
        {{ $page.project.date }} • {{ $page.project.stack }}
      </p>
      <div class="project-item-content" v-html="$page.project.content" />
      <InfoCard />
    </section>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    date(format: "MMMM YYYY")
    content
    excerpt
    cover
    stack
  }
}
</page-query>

<script>
import InfoCard from "~/components/InfoCard.vue";

export default {
  metaInfo() {
    return {
      title: `Project : ${this.$page.project.title}`,
      titleTemplate: "%s | romig.dev"
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
  max-height: 300px;
  width: 100%;
}

.project-item-title {
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 0;
}

.project-item-date-stack {
  margin: 0;
  font-weight: 200;
}

.project-item-content {
  a {
    color: #369;
  }
  pre {
    max-width: 700px;
    overflow-x: scroll;
    word-wrap: break-word;
    padding: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  }
  code {
    font-size: 1rem;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 85%;
  }
}

img + em, /* not supported yet! -> [ a:has(> img) + em ] so will use this instead*/ a + em {
  font-style: normal;
  display: inherit;
  text-align: center;
  font-size: 80%;
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