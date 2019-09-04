<template>
  <div class="layout">
    <header class="header">
      <div class="site-logo">
        <g-image src="/assets/images/logo-icon.png" />
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
        codepen: "aromig",
        twitter: "adam_romig",
        dev: "aromig"
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
  font-family: "Open Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  line-height: 1.5;
  height: 100vh;
  background: linear-gradient(15deg, #444 25%, #666) no-repeat fixed;
  text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

.layout {
  max-width: 800px;
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  margin-bottom: 20px;
  width: 760px;
  height: 80px;
  padding: 0 20px;
  background-color: #fff;
  //box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #666;
  z-index: 5;
}

.site-logo {
  margin-left: 7px;
  font-size: 1.5rem;
  & img {
    height: 24px;
  }
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
  color: #111;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans", "Segoe UI", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-weight: 600;
  color: #444;
}

hr {
  border: 0;
  display: block;
  text-align: center;
  &::before {
    content: "• • • •";
    display: inline-block;
    color: #444;
    font-size: 1rem;
    font-weight: 300;
  }
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