<template>
  <div class="info-card">
    <figure>
      <a href="/"></a>
    </figure>
    <div class="profile">
      <h3>Adam Romig</h3>
      <p>
        I am a developer in Dayton, Ohio, with experience in front-end,
        back-end, and database technolgoies.
      </p>
    </div>
  </div>
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
  width: 60px;
  height: 60px;
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
  padding: 0 15px;
  & p {
    width: 80%;
  }
}
</style>
