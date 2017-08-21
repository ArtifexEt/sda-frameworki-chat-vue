<template>
  <div id="app">
    <login v-if="!login.isUserLogged" @onLogin="onLoginHandler"></login>
     <chat v-if="login.isUserLogged" v-bind:login="login.name"></chat>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        isUserLogged: false,
        name: ''
      }
    }
  },
  methods: {
    onLoginHandler: function (name) {
      this.login = {isUserLogged: true, name}
    }
  }
}
</script>
