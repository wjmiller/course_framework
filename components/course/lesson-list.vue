<template>
<b-list-group>
  <nuxt-link v-for="(lesson,index) in lessons"
             v-bind:key="'lesson-' + index"
             v-bind:to="$route.params.course + '/' + lesson['_id']"
             class="list-group-item d-flex flex-row list-group-item-action">
    <div class="p-6">
      <img src="~/assets/images/ui/play-circle.svg" />
    </div>
    <div class="p-6">
      <div>
        <h5>{{lesson.title}}</h5>
        <b-badge pill>{{lesson.estimatedTime}}</b-badge>
      </div>
      <p>{{lesson.description}}</p>
      <b-progress v-bind:value="progress">
      </b-progress>
    </div>
  </nuxt-link>
</b-list-group>
</template>

<script>
export default {
  name: "lesson-list",
  props: {
    lessons: Array,
    progress: Number
  }
}
</script>

<style lang="scss" scoped>
.list-group-item {

    img {
        display: none;
        width: 40px;
        height: 40px;
        margin-right: 12px;

        @media(min-width: 768px) {
            display: inline-block;
        }
    }

    h5 {
        font-size: 1.15em;
        margin: 0 15px 10px 0;
    }

    .badge {
        margin-bottom: 10px;
    }

    .progress {
        width: 95px;
        height: 10px;
        border-radius: 5px;
    }

    @media(min-width: 768px) {

        h5 {
            margin: 0 15px 5px 0;
        }

        .badge {
            margin-bottom: 5px;
        }
    }
}
</style>
