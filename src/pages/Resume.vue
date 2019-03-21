<template>
  <Layout>
    <h2>Resume</h2>
    <h3 class="resume-section">Summary</h3>
    <p>{{ $options.resume.summary }}</p>

    <h3 class="resume-section">Skills</h3>
    <div v-for="skillHeading in $options.resume.skills">
      <SkillCard :skillHeading="skillHeading" />
    </div>

    <h3 class="resume-section">Education</h3>
    <div v-for="educationItem in $options.resume.education">
      <EducationCard :educationItem="educationItem" />
    </div>

    <h3 class="resume-section">Work Experience</h3>
    <div v-for="experienceItem in $options.resume.workExperience">
      <WorkExperienceCard :experienceItem="experienceItem" />
    </div>

    <h3 class="resume-section">Personal Projects</h3>
    <div v-for="project in $options.resume.personalProjects">
      <PersonalExperienceCard :project="project" />
    </div>

    <h3 class="resume-section">Code Samples</h3>
    <ul class="code-samples">
      <li v-for="site in $options.resume.codeSamples">
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
  components: {
    SkillCard,
    EducationCard,
    WorkExperienceCard,
    PersonalExperienceCard
  }
};
</script>

<style lang="scss">
p {
  font-size: 1rem;
}

.resume-section {
  border-bottom: 1px solid #369;
}

.code-samples {
  margin-left: -15px;
  & > li {
    font-size: 1rem;
  }
}
</style>
