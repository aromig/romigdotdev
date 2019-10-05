<template>
  <Layout>
    <section>
      <g-image
        src="/assets/images/404.png"
        alt="404 Picture: There's nothing here!"
        class="fourohfour"
      />
      <span class="credit"
        >Photo Credit:
        <a
          href="https://www.flickr.com/photos/davidstanleytravel/16275445625/"
          aria-label="Link to original photo source"
          target="_blank"
          >David Stanley</a
        ></span
      >
      <p>
        The page you were looking for could not be found. Please double check
        the link that led you here or try the menu above. If there is an
        incorrect link within this site's pages, please
        <g-link to="/contact">let me know</g-link> so it can be fixed.
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Page Not Found",
      titleTemplate: "%s | romig.dev"
    };
  }
};
</script>

<style lang="scss">
.fourohfour {
  width: 100%;
}

.credit {
  display: block;
  text-align: center;
  font-size: 0.75rem;
}
</style>