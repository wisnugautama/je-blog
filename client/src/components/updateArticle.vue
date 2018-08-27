<template>
<div class="container">
    <v-form>
    <v-text-field label="Title" v-model="title"></v-text-field>
    <v-textarea rows="20" label="Description" v-model="description"></v-textarea>
    <v-btn class="white" @click="updateArticle">update</v-btn>
    <v-btn class="white" to="/articles">back</v-btn>
  </v-form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return { 
      title: '',
      description: ''
    }
  },

  methods: {
    updateArticle () {
      axios({
        method: 'put',
        url: `http://server-strash.wisnugautama.xyz/articles/${this.$route.params.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          title: this.title,
          description: this.description
        }
     })
        .then((result) => {
          swal(result.data.message)
          this.$router.push('/articles')
        })
        .catch((err) => {
          
        });
    }
  },

  created () {
    axios({
      method: 'get',
      url: `http://server-strash.wisnugautama.xyz/articles/${this.$route.params.id}`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then((result) => {
        this.id = result.data.data._id
        this.title = result.data.data.title
        this.description = result.data.data.description
      })
      .catch((err) => {
        
      });
  }
}
</script>

<style scoped>
  .container {
    background-color: black;
    color: beige;
  }

  .v-btn {
    color: black;
  }
</style>
