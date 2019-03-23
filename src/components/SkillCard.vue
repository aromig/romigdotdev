<template>
  <section class="skill-card">
    <h4 class="skill-heading">{{ skillHeading.name }}</h4>
    <ul class="skill-list">
      <li v-for="skillItem in skillHeading.list">
        <span :class="'level-' + skillItem.level"></span
        ><em>{{ skillItem.skill }}</em>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    skillHeading: { type: Object }
  },
  name: "SkillCard"
};
</script>

<style lang="scss">
.skill-heading {
  margin-top: 0;
  margin-bottom: 50px;
}

.skill-list {
  position: relative;
  list-style-type: none;
  width: 100%;
  margin-left: -40px;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  & > li {
    position: relative;
    width: 30%;
    margin: 0 10px 40px;
    background: #dedede;
    height: 6px;
    & em {
      font-size: 18px;
      position: relative;
      top: -30px;
    }
    & span {
      height: inherit;
      background-color: #9cf;
      background: linear-gradient(90deg, #369, #9cf);
      position: absolute;
    }
  }
}

.level-1 {
  width: 20%;
  animation: level1 0.5s ease-out;
}
.level-2 {
  width: 40%;
  animation: level2 1s ease-out;
}
.level-3 {
  width: 60%;
  animation: level3 1.5s ease-out;
}
.level-4 {
  width: 80%;
  animation: level4 2s ease-out;
}
.level-5 {
  width: 100%;
  animation: level5 2.5s ease-out;
}

@keyframes level1 {
  0% {
    width: 0%;
  }
  100% {
    width: 20%;
  }
}
@keyframes level2 {
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
}
@keyframes level3 {
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
}
@keyframes level4 {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}
@keyframes level5 {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .skill-list > li {
    width: 42%;
  }
}
</style>
