<template>
  <footer>
    <div class="profiles">
      <a
        href="https://www.linkedin.com/in/adamromig"
        aria-label="LinkedIn Profile"
        title="LinkedIn Profile"
        ><FA-Icon :icon="['fab', 'linkedin']" class="fa-lg"></FA-Icon
      ></a>
      <a
        href="https://github.com/aromig"
        aria-label="Github Profile"
        title="Github Profile"
        ><FA-Icon :icon="['fab', 'github']" class="fa-lg"></FA-Icon
      ></a>
      <a
        href="https://codepen.io/penguingeek"
        aria-label="CodePen Profile"
        title="CodePen Profile"
        ><FA-Icon :icon="['fab', 'codepen']" class="fa-lg"></FA-Icon
      ></a>
      <a
        href="https://twitter.com/penguingeek"
        aria-label="Twitter Profile"
        title="Twitter Profile"
        ><FA-Icon :icon="['fab', 'twitter']" class="fa-lg"></FA-Icon
      ></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
footer {
  z-index: 2;
  padding: 15px;
  // border-top: 0.5px solid #444;
}

.profiles {
  display: flex;
  justify-content: space-evenly;
  & a {
    color: #444;
  }
}
</style>
