<template>
<div class="container">
  <h1 class="mb-3">Courses:</h1>
  <nuxt-link v-for="course in all_courses"
             v-bind:key="course['_id']"
             v-bind:to="course['_id']">{{course.title}}</nuxt-link>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  middleware: [ 'check_auth', 'auth' ],
  computed: {
    ...mapState( [ 'all_courses' ] )
  }
}
</script>

<style>
</style>
