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
        <li><g-link class="nav__link" to="/projects">Projects</g-link></li>
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
  font-family: Roboto, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
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
    user-select: none;
    top: 0;
    left: -50px;
  }
  #menuToggle input {
    display: block;
    width: 32px;
    height: 22px;
    margin: 0;
    position: absolute;

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
    margin-bottom: 0;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
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
    z-index: -1;
    width: 200px;
    margin: 27px 0 0 -185px;
    padding: 25px 25px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.5);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    transform-origin: 0% 0%;
    transform: translate(120%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  #menu li {
    padding: 10px 0;
    & a {
      display: block;
      color: #efefef;
      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }
  #menuToggle input:checked ~ #menu {
    transform: none;
  }
}

@media (min-width: 701px) {
  .nav {
    flex: 1 1 auto;
  }
  .nav input[type="checkbox"],
  .nav span {
    display: none;
  }
  .nav ul {
    display: flex;
    justify-content: center;
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