<template>
  <Layout>
    <h2>Projects</h2>
    <h3>Web Design &amp; Development</h3>

    <div class="project-list">
      <div v-for="project in $page.projects.edges" :key="project.node.id">
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
        excerpt
        cover
        path
      }
    }
  }
}
</page-query>

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
