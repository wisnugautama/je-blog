<template>
    <v-toolbar class="black" fixed>
    <v-toolbar-title>STRASH</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" flat>Home</v-btn>
      <v-btn to="/articles" flat> My Articles</v-btn>
      <v-btn to="/about" flat>About</v-btn>
      <v-btn v-if="!cek_login" to="/login" flat>get started</v-btn>
      <v-btn v-if="cek_login" v-on:click="logout" flat>Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import swal from 'sweetalert'

export default {
  data: function () {
    return {
      cek_login: ''
    }
  },

  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  },

  mounted () {
    this.cek_login = localStorage.getItem('token')
    if (this.cek_login !== '') {
      this.cek_login = localStorage.getItem('token')
    }
  }
}
</script>

<style scoped>
  * {
    color: beige;
  }
</style>
