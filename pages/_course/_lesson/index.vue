<template>
<b-container>
  <b-row>
    <b-col>
      <nuxt-link v-bind:to="'/' + $route.params.course"
                 class="btn">Exit Lesson</nuxt-link>
    </b-col>
  </b-row>
  <b-rowl <b-col
          sm="5">
    <lessonInfo v-bind:course="course"
                v-bind:lesson="lesson"
                v-bind:progress="progress"></lessonInfo>
    </b-col>
    </b-row>
</b-container>
</template>

<script>
import lessonInfo from '@/components/lesson/lesson-info';
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
        axios.get( 'https://api.myjson.com/bins/x6cl0' )
          .then( ( ldata ) => {
            store.commit( 'set_course', cdata.data.find( course => course[ '_id' ] === params.course ) )
            store.commit( 'set_lesson', ldata.data.find( lesson => lesson[ '_id' ] === params.lesson ) )
          } )
      } )
  },
  components: {
    lessonInfo
  },
  computed: {
    ...mapState( [ 'course', 'lesson' ] )
  },
  data() {
    return {
      progress: 0
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
