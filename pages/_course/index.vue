<template>
<b-container>
  <b-row>
    <b-col>
      <b-button>Exit Course</b-button>
    </b-col>
  </b-row>
  <b-row>
    <b-col sm="8">
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

import axios from 'axios';

import {
  mapState
} from 'vuex'


export default {
  fetch( {
    store,
    params
  } ) {
    return axios.get( 'http://localhost:3000/data/courses.json' )
      .then( ( cdata ) => {
        const course = cdata.data.filter( course => course[ '_id' ] === params.course )

        axios.get( `http://localhost:3000/data/lessons.json` )
          .then( ( ldata ) => {

            store.commit( 'set_course', course[ 0 ] )
            store.commit( 'set_lessons', ldata.data.filter( lesson => course[ 0 ].lessons.includes( lesson[ '_id' ] ) ) )

          } )
      } )
  },
  components: {
    courseInfo,
    lessonList
  },
  computed: {
    ...mapState( [ 'course', 'lessons' ] )
  },
  data() {
    return {
      progress: 30
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
    margin: 50px 0 0 20px;
}
</style>
