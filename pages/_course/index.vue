<template>
<b-container>
  <b-row>
    <b-col>
      <nuxt-link class="btn"
                 to="/">
        <fa :icon="['fas', 'chevron-left']" /> Exit Course</nuxt-link>
    </b-col>
  </b-row>
  <b-row>
    <b-col md="8">
      <courseInfo v-bind:course="course"
                  v-bind:progress="progress"></courseInfo>
    </b-col>
  </b-row>
  <b-row>
    <b-col class="course-lessons">
      <h2>Lessons</h2>
      <lessonList v-bind:lessons="lessons"
                  v-bind:progress="progress"></lessonList>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import courseInfo from '@/components/course/course-info';
import lessonList from '@/components/course/lesson-list';
import {
  mapState
} from 'vuex'


export default {
  middleware: [ 'check_auth', 'auth' ],
  components: {
    courseInfo,
    lessonList
  },
  computed: {
    ...mapState( [ 'all_courses', 'all_lessons', 'progress' ] ),
    course() {
      const course = this.all_courses.find( course => course[ '_id' ] === this.$route.params.course )
      this.$store.commit( 'set_course', course )
      return course
    },
    lessons() {
      const lessons = this.all_lessons.filter( lesson => this.course.lessons.includes( lesson[ '_id' ] ) )
      this.$store.commit( 'set_lessons', lessons )
      return lessons
    }
  },
  validate( {
    params
  } ) {
    // Must be XX_XX_##
    return /^[A-Za-z]{2}[_]{1}[A-Za-z]{2}$/.test( params.course )
  }
}
</script>

<style lang="scss" scoped>
.course-lessons {
    margin: 50px 0 0;

    @media(min-width:768px) {
        margin: 50px 0 0 20px;
    }

    h2 {
        margin-bottom: 1.2rem;

        @media(min-width: 768px) {
            margin-bottom: 0.5rem;
        }
    }

}
</style>
