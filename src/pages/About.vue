<template>
  <Layout>
    <h2>About me</h2>
    <div class="about">
      <div class="intro">
        <p>
          Hello! I am a full-stack developer located in Dayton, Ohio, with years
          of various programming experience. I enjoy making web sites,
          applications, and scripts to make my team's and customers' lives
          easier.
        </p>
        <p>
          I began learning about programming from a young age, delicately typing BASIC and machine language code from <a href="https://archive.org/details/compute-magazine" aria-label="Compute! Magazine">Compute!</a> magazines into my dad's <a href="https://en.wikipedia.org/wiki/Commodore_128" aria-label="Commodore 128 computer">Commodore 128</a>. From there I was learning QBasic, Pascal, and C++ in my teen years. I started writing HTML in the late 90's and kept a broad interest in web development throughout my adult life.
        </p>
        <p>
          I have an Associate's Degree of Applied Business from the <a href="http://www.utoledo.edu/" aria-label="University of Toledo">University of Toledo</a>, majoring in Programming &amp; Software Development, but a good portion of my current web development knowledge is self-taught.
        </p>
      </div>
      <g-image
        src="/assets/images/profile_pic_400x400.jpg"
        class="profile-pic"
      />
    </div>
    <div class="skills">
      <h2>What I know</h2>
      <p>
        I have a range of skills that I have learned over my career, both out
        of necessity &amp; curiousity:
        <ul>
          <li>
            Client-side: HTML, CSS, and JavaScript/ES6+
          </li>
          <li>
            Server-side: PHP, C#, and SQL
          </li>
          <li>
            Operational: Web servers, database structure, &amp; build tools (e.g. git, npm)
          </li>
          <li>
            Scripting: Bash, PowerShell
          </li>
        </ul>
      </p>
      <p>
        I also come from a support background so customer service, troubleshooting issues, coordinating logistics, and finding solutions is second nature to me. 
      </p>
      <h2>What I'm working on</h2>
      <p>
        At work, I have been building a metrics dashboard page for the asset management app I built &amp; still maintain. About twice a year I always had to do some custom querying into its database to provide metrics to management. With this dashboard, we can get an instant view into how we're progressing into the current year, as well as past years' data.
      </p>
      <p>
        I am currently learning about
        <a href="https://vuejs.org" aria-label="Learn more about Vue JS">Vue.js</a> and I am
        finding that its implementation of a front-end framework meshes very
        well with how I have developed web applications in the past. Sites like <a href="https://www.vuemastery.com/" aria-label="Go to VueMastery.com">Vue Mastery</a> and developing this very site have given me a lot of practice in working with Vue and component-based structure.
      </p>
    </div>
    <div class="this_site">
      <h2>This Site</h2>
      <p>
        This site is built with <a href="https://vuejs.org" aria-label="Learn more about Vue JS">Vue.js</a> and <a href="https://gridsome.org" aria-label="Go to gridsome">Gridsome</a>, hosted on <a href="https://www.netlify.com/" aria-label="Go to Netlify">Netlify</a>. Building this site has reinforced a lot of what I had recently learned about Vue. The source code is available to look at on <a href="https://github.com/aromig/romigdotdev" aria-label="Go to the Github repository">Github</a>.
      </p>
    </div>
    <div class="contact">
      <h2>Contacting me</h2>
      <p>Feel free to follow me at the social sites below or <g-link to="/contact">send me an email</g-link>.</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.intro {
  padding-right: 10px;
}

img.profile-pic {
  flex-shrink: 0;
  box-shadow: 0 0 25px #ccc;
  border-radius: 100%;
  width: 200px;
  height: 200px;
}

@media (max-width: 700px) {
  .about {
    flex-direction: column-reverse;
  }
  img.profile-pic {
    margin: 0 auto;
  }
}
</style>