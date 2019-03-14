<template>
  <div class="layout">
    <header class="header">
      <div class="site-logo">
        <FA-Icon :icon="['fas', 'terminal']" scale="1.25"></FA-Icon>&nbsp;
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </div>
      <NavMenu />
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <Footer> </Footer>
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
  font-family: Roboto, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  padding: 0 20px;
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
  padding: 0 15px;
}
</style>