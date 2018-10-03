<template>
    <div class="container">
       <v-layout>
        <v-flex xs12 sm12>
        <v-card v-for="(data,i) in MyArticles" v-bind:key="i">
            <v-card-media v-bind:src="data.image" height="200px"
            ></v-card-media>

            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0"> {{ data.title }} </h3>
                <hr>
                <br>
                <div> {{ data.description }} </div>
                <br>
                <hr>
                <div> <b>Posted by {{ data.userId.name }} on {{ data.createdAt.slice(0,10) }}</b></div>
            </div>
            </v-card-title>

            <v-card-actions>
            <v-btn> <router-link :to="`/articles/update/${data._id}`">Edit</router-link> </v-btn>
            <v-btn v-on:click="deleteArticle(data)">delete</v-btn>
            </v-card-actions>
        </v-card>
        </v-flex>
       </v-layout> 
    </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data: function () {
      return {
        token: localStorage.getItem('token'),
        MyArticles: []
      }
    },

    mounted () {
      axios({
        method: 'get',
        url: 'https://server-strash.wisnugautama.xyz/articles/me',
        headers: {
          token: this.token
        }
      })
        .then((result) => {
          console.log(result.data.data);
          this.MyArticles = result.data.data
        })
        .catch((err) => {
          // swal(err.message)
        });
    },

    methods: {
      deleteArticle (data) {
        axios({
          method: 'delete',
          url: `https://server-strash.wisnugautama.xyz/articles/${data._id}`,
          headers: {
            token: this.token
          }
        })
          .then((result) => {
            swal(result.data.message)
            this.$router.go()
          })
          .catch((err) => {
            swal(err.message)
          });
      }
    }
}
</script>

<style scoped>
  .v-card {
    margin-bottom: 50px;
    background-color: black;
    color: beige;
  }
  
  .v-btn {
    color: black;
    background-color: white;
  }
</style>
