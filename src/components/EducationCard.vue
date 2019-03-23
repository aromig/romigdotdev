<template>
  <section class="education-card">
    <div class="education-heading">
      <h4 v-if="educationItem.institution" class="education-title">
        {{ educationItem.institution
        }}<span class="education-area"
          >, {{ educationItem.studyType + " in " + educationItem.area }}</span
        >
      </h4>
      <h4 v-else class="education-title">
        <span class="education-area">{{
          educationItem.studyType + " in " + educationItem.area
        }}</span>
      </h4>
      <span class="education-dates">
        {{ dateMonthYear(educationItem.startDate) }} to
        {{ dateMonthYear(educationItem.endDate) }}
      </span>
    </div>
    <ul class="education-highlights">
      <li v-for="highlight in educationItem.highlights">
        {{ highlight }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    educationItem: { type: Object }
  },
  name: "EducationCard",
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
.education-card {
  margin-bottom: 25px;
}

.education-heading {
  display: flex;
  justify-content: space-between;
}

.education-title {
  margin: 0;
}

.education-area {
  font-weight: normal;
}

.education-highlights {
  margin-left: -15px;
}

@media (max-width: 700px) {
  .education-heading {
    display: block;
  }
}
</style>
