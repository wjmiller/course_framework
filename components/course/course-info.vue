<template>
<div class="course-info">
  <h1 class="course-title">{{course.title}}</h1>
  <b-progress v-bind:value="progress"></b-progress>
  <div class="course-description">{{course.description}}</div>
  <b-badge pill>{{course.estimatedTime}}</b-badge>
</div>
</template>

<script>
export default {
  name: "course-info",
  props: {
    course: Object,
    progress: Number
  }
}
</script>

<style lang="scss">
@import "~assets/scss/variables.scss";

.course-info {
    .course-title {
        margin: 2.5rem 0 1.4rem;
        font-size: 3.2rem;
    }
    .progress {
        width: 95px;
        height: 12px;
        border-radius: 6px;
    }
    .course-description {
        margin: 15px 0;
    }
}
</style>
