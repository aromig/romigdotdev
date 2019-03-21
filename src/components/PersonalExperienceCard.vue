<template>
  <div class="personal-project-card">
    <div class="personal-project-heading">
      <div v-if="project.stub">
        <h4 class="personal-project-title">
          <g-link :to="project.stub">{{ project.name }}</g-link>
        </h4>
        <span class="personal-project-stack">{{ project.stack }}</span>
      </div>
      <div v-else>
        <h4 class="personal-project-title">
          {{ project.name }}
        </h4>
        <span class="personal-project-stack">{{ project.stack }}</span>
      </div>

      <span class="personal-project-date">
        {{ dateMonthYear(project.date) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: { type: Object }
  },
  name: "PersonalExperienceCard",
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
.personal-project-card {
  margin-bottom: 25px;
}

.personal-project-heading {
  display: flex;
  justify-content: space-between;
}

.personal-project-title {
  margin: 0;
}

.personal-project-stack {
  font-size: 0.85rem;
}

@media (max-width: 700px) {
  .personal-project-heading {
    display: block;
  }
}
</style>
