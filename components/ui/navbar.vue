<template lang="html">
  <b-navbar>
    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <img class="notes-btn" src="~/assets/images/ui/edit.svg"/>
      </b-nav-item>
      <b-nav-item-dropdown right>
        <template slot="button-content"><img class="user" src="~/assets/images/ui/user.png" /></template>
        <toggle-button class="theme-btn"
                       v-bind:value="true"
                       v-bind:labels="{checked: 'Dark ', unchecked: ' Light'}"
                       v-bind:width="70"
                       v-bind:height="30"
                       v-bind:color="{checked: '#676EC9', unchecked: '#8B8C96'}"
                       v-on:change="toggleTheme" />
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import {
  ToggleButton
} from 'vue-js-toggle-button'

export default {
  name: "navbar",
  data() {
    return {
      theme: 'dark'
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.theme
      }
    }
  },
  components: {
    ToggleButton
  },
  methods: {
    toggleTheme( ev ) {
      ev.value ? this.theme = 'dark' : this.theme = 'light'
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-btn {
    margin-left: 20px;
}

.notes-btn {
    width: 30px;
    margin: 5px 10px 0 0;
}

.user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #C1C2C6;
    margin-right: 5px;
}
</style>
