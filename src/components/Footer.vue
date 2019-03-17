<template>
  <footer>
    <div class="profiles">
      <a
        :href="`https://www.linkedin.com/in/${profile.linkedin}`"
        aria-label="Go to my LinkedIn profile"
        title="LinkedIn Profile"
        ><FA-Icon :icon="['fab', 'linkedin']" class="fa-lg"></FA-Icon
      ></a>
      <a
        :href="`https://github.com/${profile.github}`"
        aria-label="Go to my Github profile"
        title="Github Profile"
        ><FA-Icon :icon="['fab', 'github']" class="fa-lg"></FA-Icon
      ></a>
      <a
        :href="`https://codepen.io/${profile.codepen}`"
        aria-label="Go to my CodePen profile"
        title="CodePen Profile"
        ><FA-Icon :icon="['fab', 'codepen']" class="fa-lg"></FA-Icon
      ></a>
      <a
        :href="`https://twitter.com/${profile.twitter}`"
        aria-label="Go to my Twitter profile"
        title="Twitter Profile"
        ><FA-Icon :icon="['fab', 'twitter']" class="fa-lg"></FA-Icon
      ></a>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    profile: { type: Object }
  },
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
    &:hover {
      color: #369;
    }
  }
}
</style>
