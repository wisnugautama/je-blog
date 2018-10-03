<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      style="height: 100%"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
          {
            src: 'https://data.whicdn.com/images/35556949/original.jpg'
          },
          {
            src: 'https://images.genius.com/3ee40041f7070ffb6d887c1a3f8b9144.1000x1000x1.jpg'
          },
          {
            src: 'https://img.grouponcdn.com/deal/2bDhGAanGBeEBc4Mrttvo71BgM1X/2b-2048x1229/v1/c700x420.jpg'
          }
        ]
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 100px; 
  }

  .carousel {
    background-position: center
  }

  .jmb {
    margin-bottom: 20px;
    color: brown;
    font-family: 'Sawarabi Mincho', sans-serif;
    
  }
</style>
