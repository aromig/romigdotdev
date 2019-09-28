<template>
  <section class="experience-card">
    <div class="experience-heading">
      <h4 class="experience-title">
        {{ experienceItem.position }}<br /><span class="experience-company"
          ><a :href="experienceItem.website" target="_blank">
            {{ experienceItem.company }}</a
          ><br /><small>{{ experienceItem.summary }}</small></span
        >
      </h4>
      <span class="experience-dates">
        <span v-if="experienceItem.startDate"
          >{{ dateMonthYear(experienceItem.startDate) }} to</span
        >
        {{ dateMonthYear(experienceItem.endDate) }}
      </span>
    </div>
    <ul class="experience-highlights">
      <li v-for="highlight in experienceItem.highlights" :key="highlight">
        {{ highlight }}
      </li>
    </ul>

    <div class="experience-projects" v-if="experienceItem.projects">
      <h4>Projects</h4>
      <ul class="experience-projects-list">
        <li v-for="project in experienceItem.projects" :key="project.name">
          <span v-if="project.stub">
            <g-link :to="project.stub">{{ project.name }}</g-link>
          </span>
          <span v-else>
            {{ project.name }}
          </span>
          -
          <small>{{ project.stack }}</small>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    experienceItem: { type: Object }
  },
  name: "WorkExperienceCard",
  methods: {
    dateMonthYear: date_string => {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      const date = new Date(date_string);

      if (date == "Invalid Date") return date_string;

      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      return monthNames[monthIndex] + " " + year;
    }
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}

.experience-card {
  margin-bottom: 25px;
}

.experience-title {
  margin: 0;
}

.experience-heading {
  display: flex;
  justify-content: space-between;
}

.experience-company {
  font-weight: normal;
}

.experience-highlights,
.experience-projects-list {
  margin-left: -15px;
  list-style-type: none;
  li:before {
    content: "‣";
    margin-left: -20px;
    margin-right: 10px;
  }
}

.experience-projects {
  margin-left: 10px;
}

@media (max-width: 700px) {
  .experience-heading {
    display: block;
  }
}
</style>

