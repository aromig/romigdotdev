<template>
  <section class="info-card">
    <figure>
      <a href="/about" aria-label="Learn more about me" title="About Me"></a>
    </figure>
    <div class="profile">
      <h3>Adam Romig</h3>
      <p>
        I am a full-stack developer located in the American Midwest. I
        occassionally write about development, new things I've learned, and
        matters that are important to me. Feel free to
        <g-link to="/contact">contact me</g-link> or find me on social media.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoCard"
};
</script>

<style lang="scss">
.info-card {
  position: relative;
  top: 50px;
  border-top: 1px solid #444;
  & h3 {
    font-weight: 400;
  }
}
figure {
  box-sizing: border-box;
  display: block;
  width: 45px;
  height: 45px;
  position: absolute;
  top: -45px;
  right: 0px;
  z-index: 2;
  border: 0.5px solid #444;
  border-radius: 100%;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 0 1px #444;
  & a {
    display: block;
    width: 100%;
    height: 100%;
    background: url(/assets/images/profile_pic_400x400.jpg) center center;
    background-size: cover;
  }
}

.profile {
  position: relative;
  top: -50px;
  display: block;
  & p {
    margin-top: 30px;
  }
}
</style>
