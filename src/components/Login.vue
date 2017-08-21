<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title">Login:</h3>
                <div class="input-group">
                    <input type="text" class="form-control"  v-model="login" placeholder="Enter user name"></input>
                    <span class="input-group-btn">
                        <button class="btn btn-secondary" v-on:click="onLoginClick" type="button">Enter
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: ''
    }
  },
  methods: {
    onLoginClick: function (event) {
      this.$emit('onLogin', this.login)
    }
  }
}
</script>


<style scoped>

</style>
