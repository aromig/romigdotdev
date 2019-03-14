<template>
  <nav role="navigation" class="nav">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <li><g-link class="nav__link" to="/">Home</g-link></li>
        <li><g-link class="nav__link" to="/blog">Blog</g-link></li>
        <li><g-link class="nav__link" to="/resume">Resume</g-link></li>
        <li><g-link class="nav__link" to="/portfolio">Portfolio</g-link></li>
        <li><g-link class="nav__link" to="/about">About</g-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu"
};
</script>

<style lang="scss">
.nav__link {
  text-decoration: none;
  padding: 0;
  padding-bottom: 5px;
  font-size: 1rem;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s;
  &:hover {
    border-bottom: 1px solid #444;
    transition: border-bottom 0.3s;
  }
}
@media (max-width: 700px) {
  #menuToggle {
    display: block;
    position: relative;
    z-index: 1;
    user-select: none;
  }
  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }
  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #444;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #efefef;
    transition: background 0.5s east-out;
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  #menu {
    position: absolute;
    width: 150px;
    margin: -70px 0 0 -200px;
    padding: 25px 50px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.5);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    transform-origin: 0% 0%;
    transform: translate(0, -100%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu li {
    padding: 10px 0;
    & a {
      color: #efefef;
      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }
  #menuToggle input:checked ~ ul {
    transform: none;
  }
}

@media (min-width: 701px) {
  .nav input[type="checkbox"],
  .nav span {
    display: none;
  }
  .nav ul {
    display: flex;
    list-style: none;
  }
  .nav li {
    padding: 5px;
  }

  .nav__link {
    color: #444;
    margin-left: 20px;
  }
}
</style>