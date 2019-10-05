<template>
  <Layout>
    <h2>About me</h2>
    <section class="about">
      <div class="intro">
        <p>
          Hello! I am a full-stack developer located in Dayton, Ohio, with years
          of various programming experience. I enjoy making web sites,
          applications, and scripts to make my team's and customers' lives
          easier.
        </p>
        <p>
          I began learning about programming from a young age, delicately typing BASIC and machine language code from <a href="https://archive.org/details/compute-magazine" aria-label="Compute! Magazine" target="_blank" rel="nofollow">Compute!</a> magazines into my dad's <a href="https://en.wikipedia.org/wiki/Commodore_128" aria-label="Commodore 128 computer" target="_blank" rel="nofollow">Commodore 128</a>. From there I was learning QBasic, Pascal, and C++ in my teen years. I started writing HTML in the late 90's and kept a broad interest in web development throughout my adult life.
        </p>
        <p>
          I have an Associate's Degree of Applied Business from the <a href="http://www.utoledo.edu/" aria-label="University of Toledo" target="_blank" rel="nofollow">University of Toledo</a>, majoring in Programming &amp; Software Development, but a good portion of my current web development knowledge is self-taught.
        </p>
        <p>
          When I'm not coding, I am making other things. I <a href="https://github.com/aromig/recipes">enjoy cooking</a> and <a href="https://cakes.romig.dev" target="_blank">baking cakes</a> for birthdays, special occasions or just for fun. At times I also find myself using hand &amp; power tools for on-the-job learning for home improvement projects or anything my wife can envision.
        </p>
      </div>
      <g-image
        src="/assets/images/profile_pic_400x400.jpg"
        class="profile-pic"
      />
    </section>
    <section class="skills">
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
        I also come from a support background so customer service, troubleshooting issues, coordinating logistics, and finding solutions are second nature to me. 
      </p>
      <h2>What I'm working on</h2>
      <p>
        At work, I have been coding a new version of the REST API that imports equipment requests from ServiceNow into our asset management app, updating the Entity model and some functions for returning LINQ to SQL results that fill in no longer supplied information. Along with this, I am currently making changes to the main app in order to help facilitate the future adoption of our process by our counterparts in the United Kingdom.
      </p>
      <p>
        I am currently learning about
        <a href="https://vuejs.org" aria-label="Learn more about Vue JS" target="_blank" rel="nofollow">Vue.js</a> and I am
        finding that its implementation of a front-end framework meshes very
        well with how I have developed web applications in the past. Sites like <a href="https://www.vuemastery.com/" aria-label="Go to VueMastery.com" target="_blank" rel="nofollow">Vue Mastery</a> and developing this very site have given me a lot of practice in working with Vue and component-based structure.
      </p>
    </section>
    <section class="this_site">
      <h2>This Site</h2>
      <p>
        This site is built with <a href="https://vuejs.org" aria-label="Learn more about Vue JS" target="_blank" rel="nofollow">Vue.js</a> and <a href="https://gridsome.org" aria-label="Go to gridsome" target="_blank" rel="nofollow">Gridsome</a>, hosted on <a href="https://www.netlify.com/" aria-label="Go to Netlify" target="_blank" rel="nofollow">Netlify</a>. The main font is <a href="https://fonts.google.com/specimen/Open+Sans" aria-label="Go to Google Fonts" target="_blank" rel="nofollow">Open Sans</a> and any icons used are from <a href="https://fontawesome.com/" aria-label="Go to Font Awesome" target="_blank" rel="nofollow">Font Awesome</a>. A full write-up on its creation can be found in <a href="/blog/new-site-with-vue-and-gridsome" aria-label="Read more about the site's creation">an article here</a>. The source code is available to look at on <a href="https://github.com/aromig/romigdotdev" aria-label="Go to the Github repository">Github</a>.
      </p>
    </section>
    <section class="contact">
      <h2>Contacting me</h2>
      <p>Feel free to follow me at the social sites below or <g-link to="/contact">send me an email</g-link>.</p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About me",
    titleTemplate: "%s | romig.dev"
  }
};
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
}

.skills ul {
  margin-left: -15px;
}

@media (max-width: 700px) {
  .about {
    flex-direction: column-reverse;
    img.profile-pic {
      margin: 0 auto;
    }
  }
}
</style>