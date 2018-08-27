<template>
<div class="container">
  <v-layout align-start justify-start row fill-height wrap>
    <v-layout xs12 sm6 v-for="(data,i) in article" v-bind:key="i">
      <v-card class="kartu">
        <v-card-media v-bind:src="data.image" height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 style="text-align: left;"> {{ data.title }} </h3>
            <hr>
            <div style="text-align: left; color: brown"> <b>Posted by {{ data.userId.name }} on {{ data.createdAt.slice(0,10) }}</b></div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange"><router-link :to="`/articles/detail/${data._id}`">See Article</router-link></v-btn>
        </v-card-actions>
        </v-card>
    </v-layout>
  </v-layout>
  </div>
</template>

<script>
export default {
  props: ['article'],
  data: function () {
    return {
      
    }
  }
}
</script>

<style scoped>
  .kartu {
    margin-bottom: 50px;
    background-color: black;
    color: beige;
    width: 550px;
    margin-left: 10px;
    height: 350px;
    border-bottom: 2px solid brown;
  }

  a {
    color: beige;
    }

  hr {
    width: 100%;
  }

  .he {
    background-color: white;
    margin-bottom: 20px;
  }
</style>
