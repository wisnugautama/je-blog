<template>
  <div class="home">
    <Carousel></Carousel>
    <CardBlog :article="articles"></CardBlog>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import CardBlog from '@/components/CardBlog.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'home',
  components: {
    CardBlog,
    Carousel
  },

  data: function () {
    return {
      articles: []
    }
  },

  mounted () {
    axios({
      method: 'get',
      url: 'http://server-strash.wisnugautama.xyz/articles',
    })
      .then((response) => {
        this.articles = response.data.data
      })
      .catch((err) => {
      });
  }
}
</script>
