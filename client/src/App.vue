<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <Carousel></Carousel> -->
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'content',
  components: {
    Navbar,
    Carousel,
    Footer
  }
}
</script>

<style>
body {
  background-image: url('./assets/666.jpg');
  background-color: black;
  background-attachment: fixed;
  margin-top: 60px;
  /* background-repeat: no-repeat; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
