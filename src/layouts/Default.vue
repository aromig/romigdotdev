<template>
  <div class="layout">
    <header class="header">
      <div class="site-logo">
        <FA-Icon :icon="['fas', 'terminal']" class="fa-sm"></FA-Icon>&nbsp;
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </div>
      <NavMenu />
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <Footer :profile="profile" />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import NavMenu from "~/components/NavMenu.vue";
import Footer from "~/components/Footer.vue";

export default {
  data: () => {
    return {
      profile: {
        linkedin: "adamromig",
        github: "aromig",
        codepen: "penguingeek",
        twitter: "penguingeek"
      }
    };
  },
  components: {
    NavMenu,
    Footer
  }
};
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}

body {
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  line-height: 1.5;
  height: 100vh;
  background: linear-gradient(45deg, #111, #444) no-repeat fixed;
}

.layout {
  max-width: 700px;
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  margin-bottom: 20px;
  width: 660px;
  height: 80px;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 0.5px solid #444;
}

.site-logo {
  font-size: 1.5rem;
  & a {
    text-decoration: none;
    color: #444;
    &:hover {
      border-bottom: 0;
    }
  }
}

main {
  flex: 1;
  margin-top: 80px;
  padding: 0 50px;
}

p,
li,
form {
  font-size: 1.1rem;
  font-weight: 300;
  // font-family: "Segoe UI";
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Roboto, "Segoe UI", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-weight: 300;
}

a {
  color: #369;
}

@media (max-width: 700px) {
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 20px;
  }
  main {
    padding: 0 20px;
  }
}
</style>