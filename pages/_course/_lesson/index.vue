<template>
<b-container>
  <b-row>
    <b-col>
      <nuxt-link v-bind:to="'/' + $route.params.course"
                 class="btn exit-btn">
        <fa :icon="['fas', 'chevron-left']" /> Exit Lesson</nuxt-link>
    </b-col>
  </b-row>
  <b-rowl <b-col
          md="6"
          lg="5">
    <lessonInfo v-bind:course="course"
                v-bind:lesson="lesson"
                v-bind:progress="progress"></lessonInfo>
    </b-col>
    </b-row>
</b-container>
</template>

<script>
import lessonInfo from '@/components/lesson/lesson-info';
import {
  mapState
} from 'vuex'

export default {
  middleware: [ 'check_auth', 'auth' ],
  components: {
    lessonInfo
  },
  computed: {
    ...mapState( [ 'all_courses', 'all_lessons', 'progress' ] ),
    course() {
      const course = this.all_courses.find( course => course[ '_id' ] === this.$route.params.course )
      this.$store.commit( 'set_course', course )
      return course
    },
    lesson() {
      const lesson = this.all_lessons.find( lesson => lesson[ '_id' ] === this.$route.params.lesson )
      this.$store.commit( 'set_lesson', lesson )
      return lesson
    }
  },
  validate( {
    params
  } ) {
    // Must be XX_XX_##
    return /^[A-Za-z]{2}[_]{1}[A-Za-z]{2}[_]{1}[0-9]{2}$/.test( params.lesson )
  }
}
</script>

<style lang="scss" scoped>
</style>
