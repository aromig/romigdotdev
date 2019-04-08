<template>
  <Layout>
    <h2>Projects</h2>
    <h3 class="heading">Web Development</h3>

    <section class="project-list">
      <div v-for="project in $page.projects.edges" :key="project.node.id">
        <ProjectCard :project="project.node"></ProjectCard>
      </div>
    </section>

    <h3 class="heading">Graphic Work</h3>
    <section class="project-list">
      <div v-for="project in $static.projects.edges" :key="project.node.id">
        <ProjectCard :project="project.node"></ProjectCard>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject (sortBy: "date", order: DESC) {
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
</page-query>
<static-query>
query GraphicProjects {
  projects: allGraphicProject (sortBy: "date", order: DESC) {
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
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  metaInfo() {
    return {
      title: "Projects"
    };
  },
  components: {
    ProjectCard
  }
};
</script>

<style lang="scss">
h3.heading {
  text-align: center;
  font-size: 1.25rem;
}

.project-list {
  display: flex;
  flex-direction: column;
}
</style>
