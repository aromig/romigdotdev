<template>
  <div class="experience-card">
    <div class="experience-heading">
      <h4 class="experience-title">
        {{ experienceItem.position }}<br /><span class="experience-company">{{
          experienceItem.company
        }}</span>
      </h4>
      <span class="experience-dates">
        {{ dateMonthYear(experienceItem.startDate) }} to
        {{ dateMonthYear(experienceItem.endDate) }}
      </span>
    </div>
    <ul class="experience-highlights">
      <li v-for="highlight in experienceItem.highlights">
        {{ highlight }}
      </li>
    </ul>

    <div class="experience-projects">
      <h4>Projects</h4>
      <ul class="experience-projects-list">
        <li v-for="project in experienceItem.projects">
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
  </div>
</template>

<script>
export default {
  props: {
    experienceItem: { type: Object }
  },
  name: "ExperienceCard",
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

      const monthIndex = date.getMonth() + 1;
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
  flex-grow: 1;
  margin: 0;
}

.experience-heading {
  display: flex;
}

.experience-company {
  font-weight: normal;
}

.experience-highlights,
.experience-projects-list {
  margin-left: -15px;
  & > li {
    font-size: 1rem;
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

