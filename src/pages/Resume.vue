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
      <ExperienceCard :experienceItem="experienceItem" />
    </div>
  </Layout>
</template>

<page-query>
</page-query>

<script>
import resumeJSON from "~/data/resume.json";
import SkillCard from "~/components/SkillCard.vue";
import EducationCard from "~/components/EducationCard.vue";
import ExperienceCard from "~/components/ExperienceCard.vue";

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
    ExperienceCard
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
</style>
