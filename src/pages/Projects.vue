<template>
  <Layout>
    <h2>Projects</h2>
    <h3>Web Development</h3>

    <div class="project-list">
      <div v-for="project in $page.projects.edges" :key="project.node.id">
        <ProjectCard :project="project.node"></ProjectCard>
      </div>
    </div>

    <h3>Graphic Work</h3>
    <div class="project-list">
      <div v-for="project in $static.projects.edges" :key="project.node.id">
        <ProjectCard :project="project.node"></ProjectCard>
      </div>
    </div>
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
  components: {
    ProjectCard
  }
};
</script>

<style>
.project-list {
  display: flex;
  flex-direction: column;
}
</style>
