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

import axios from 'axios';

import {
  mapState
} from 'vuex'


export default {
  fetch( {
    store,
    params
  } ) {
    return axios.get( 'https://api.myjson.com/bins/17w5h0' )
      .then( ( cdata ) => {
        const course = cdata.data.find( course => course[ '_id' ] === params.course )

        axios.get( 'https://api.myjson.com/bins/x6cl0' )
          .then( ( ldata ) => {

            store.commit( 'set_course', course )
            store.commit( 'set_lessons', ldata.data.filter( lesson => course.lessons.includes( lesson[ '_id' ] ) ) )

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
      progress: 40
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
