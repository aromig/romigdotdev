<template>
  <section class="project-card">
    <g-image class="project-cover" :src="project.cover" />
    <div class="project-description">
      <h3>
        <g-link :to="project.path">{{ project.title }}</g-link>
        <br />
        <small>{{ project.stack }}</small>
      </h3>
      <p>{{ project.excerpt }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: { type: Object }
  },
  name: "ProjectCard"
};
</script>

<style lang="scss">
.project-card {
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 0.5px solid #ccc;
  padding: 12.5px 0;
  margin: 12.5px 0;

  .project-cover {
    object-fit: contain;
    object-position: 50% 0;
    width: 200px;
    height: 200px;
  }

  .project-description {
    padding: 0 15px;
    flex: 1;
    h3 {
      margin: 0.5rem 0;
    }
    p {
      font-size: 1rem;
    }
    a {
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
}

@media (max-width: 700px) {
  .project-card {
    flex-direction: column;
    padding-bottom: 25px;
    margin-bottom: 25px;
    .project-cover {
      object-fit: contain;
      width: 80%;
      max-height: 250px;
      margin: 0 auto;
      border: none;
    }
  }
}
</style>
