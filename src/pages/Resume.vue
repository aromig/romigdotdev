<template>
  <Layout>
    <header class="resume_header">
      <h2>Resume</h2>
      <div class="pdf_download">
        <a href="/assets/docs/AdamRomig_Resume2019.pdf" target="_blank">
          <FA-Icon :icon="['far', 'file-pdf']" class="fa-lg"></FA-Icon> Download
          PDF</a
        >
      </div>
    </header>
    <h3 class="resume-section">Summary</h3>
    <p>{{ $options.resume.summary }}</p>

    <h3 class="resume-section">Skills</h3>
    <div
      v-for="skillHeading in $options.resume.skills"
      :key="skillHeading.name"
    >
      <SkillCard :skillHeading="skillHeading" />
    </div>

    <h3 class="resume-section">Education</h3>
    <div
      v-for="educationItem in $options.resume.education"
      :key="educationItemKey(educationItem)"
    >
      <EducationCard :educationItem="educationItem" />
    </div>

    <h3 class="resume-section">Work Experience</h3>
    <div
      v-for="experienceItem in $options.resume.workExperience"
      :key="experienceItemKey(experienceItem)"
    >
      <WorkExperienceCard :experienceItem="experienceItem" />
    </div>

    <h3 class="resume-section">Personal Projects</h3>
    <div
      v-for="project in $options.resume.personalProjects"
      :key="project.name"
    >
      <PersonalExperienceCard :project="project" />
    </div>

    <h3 class="resume-section">Code Samples</h3>
    <ul class="code-samples">
      <li v-for="site in $options.resume.codeSamples" :key="site.network">
        <a
          :href="site.url"
          :aria-label="`Go to my profile on ${site.network}`"
          target="_blank"
          >{{ site.network }}</a
        >
      </li>
    </ul>
  </Layout>
</template>

<script>
import resumeJSON from "~/data/resume.json";
import SkillCard from "~/components/SkillCard.vue";
import EducationCard from "~/components/EducationCard.vue";
import WorkExperienceCard from "~/components/WorkExperienceCard.vue";
import PersonalExperienceCard from "~/components/PersonalExperienceCard.vue";

export default {
  metaInfo() {
    return {
      title: "Resume"
    };
  },
  resume: resumeJSON.resume,
  methods: {
    educationItemKey: educationItem => {
      return educationItem.studyType + " " + educationItem.area;
    },
    experienceItemKey: experienceItem => {
      return experienceItem.position + " " + experienceItem.company;
    }
  },
  components: {
    SkillCard,
    EducationCard,
    WorkExperienceCard,
    PersonalExperienceCard
  }
};
</script>

<style lang="scss">
p,
li {
  font-size: 1rem;
}

.resume-section {
  border-bottom: 1px solid #369;
}

.code-samples {
  margin-left: -15px;
  list-style-type: none;
  li {
    font-size: 1rem;
    &:before {
      content: "‣";
      margin-left: -20px;
      margin-right: 10px;
    }
  }
}

.resume_header {
  display: flex;
  align-items: center;
  .pdf_download {
    flex: 1;
    text-align: right;
    a {
      border: 0.5px solid #333;
      background-color: #fff;
      text-decoration: none;
      color: initial;
      padding: 5px;
      &:hover {
        color: #369;
        border-color: #369;
      }
    }
  }
}
</style>
