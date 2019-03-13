<template>
  <div class="layout">
    <header class="header">
      <div class="site-logo">
        <Icon name="terminal" scale="1.25" />&nbsp;
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </div>
      <NavMenu />
    </header>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
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

export default {
  components: {
    NavMenu
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
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
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
</style>