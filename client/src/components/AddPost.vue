<template>
  <div class="container">
    <v-layout>
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <v-btn slot="activator" class="white">Add Article</v-btn>
      <v-card class="ho">
        <v-card-title>
          <span class="headline">Add New Article</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex>
                <v-text-field v-model="title" label="Title" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea rows="20" v-model="description" label="Content Article"></v-textarea>
              </v-flex>
                <input v-on:change="getImage" type="file">
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat v-on:click="addArticle" @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data: () => ({
      dialog: false,
      title: '',
      description: '',
      image: ''
    }),

    methods: {
      addArticle: function () {
        let formdata = new FormData()
        formdata.append('image', this.image)
        axios.post('http://server-strash.wisnugautama.xyz/articles/upload', formdata)
          .then((result) => {
            axios({
              method: 'post',
              url: 'http://server-strash.wisnugautama.xyz/articles',
              headers: {
                token: localStorage.getItem('token')
              },
              data: {
                title: this.title,
                description: this.description,
                image: result.data.link
              }
            })
              .then((result) => {
                swal(result.data.message)
                
              })
              .catch((err) => {
                
              });
          })
          .catch((err) => {
            
          });
      },

      getImage (image) {
        this.image = image.target.files[0]
      }
    }
}
</script>

<style>
  .ho {
    background-color: white;
  }
</style>
