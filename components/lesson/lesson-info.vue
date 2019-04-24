<template>
<div class="lesson-info">
  <div class="course-title">{{course.title}}</div>
  <h1 class="lesson-title">{{lesson.title}}</h1>
  <div class="lesson-description">{{lesson.description}}</div>
  <b-badge pill>{{lesson.estimatedTime}}</b-badge>
  <b-progress v-bind:value="progress"></b-progress>
</div>
</template>

<script>
export default {
  name: "lesson-info",
  props: {
    course: Object,
    lesson: Object,
    progress: Number
  }
}
</script>

<style lang="scss">
@import "~assets/scss/variables.scss";

.lesson-info {
    .course-title {
        font-size: 1.2rem;
        margin: 2.5rem 0 0.5rem;
    }

    .dark {
        .course-title {
            color: $dark-gray-light;
        }
    }

    .light {
        .course-title {
            color: $light-text-color;
        }
    }

    .lesson-title {
        margin: 0;
        font-size: 2.4rem;
    }

    .lesson-description {
        font-size: 0.9em;
        font-style: italic;
        margin: 0.7rem 0 1rem;
    }

    .progress {
        display: inline-block;
        width: 95px;
        height: 12px;
        border-radius: 6px;
    }

    .badge {
        display: inline-block;
        margin-right: 0.6rem;
    }

}
</style>
