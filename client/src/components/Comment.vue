<template>
    <div class="container">
    <v-layout>
    <v-flex xs12 sm6 offset-sm1>
      <v-card v-for="(data,i) in comments" v-bind:key="i">
        <v-card-title primary-title>
          <div>
            <h2 style="text-align: left;"> {{ data.name }} </h2>
            <div style="text-align: left;"> Posted on : {{ data.date.slice(0,10) }} </div>
            <hr>
            <br>
            <div> {{ data.comment }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn v-if="user_login == data.name || user_login == yangBuat" @click="deleteComment(data._id)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    </v-layout>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            comments: [],
            yangBuat: '',
            cek_login: localStorage.getItem('token'),
            user_login: ''
        }
    },

    methods: {
        getArticles() {
            axios({
            method: 'get',
            url: `https://server-strash.wisnugautama.xyz/articles/${this.$route.params.id}`,
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then((result) => {
                this.comments = result.data.data.comments
                this.yangBuat = result.data.data.userId.name
            })
            .catch((err) => {
                
            });
        },

        deleteComment (id_comment) {
                axios({
                method: 'put',
                url: `https://server-strash.wisnugautama.xyz/articles/comment/${this.$route.params.id}/delete`,
                headers: {
                    token: localStorage.getItem('token')
                },
                data: {
                    id_comment: id_comment
                }
            })
                .then((result) => {
                    swal(result.data.message);
                    this.user_login = name
                    this.$router.go()
                })
                .catch((err) => {
                    swal(err.message)
                });
        },

        getMe () {
            axios({
                method: 'get',
                url: `https://server-strash.wisnugautama.xyz/users`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then((result) => {
                    this.user_login = result.data.data.name
                })
                .catch((err) => {
                    // swal(err.message)
                });
        }
    },

    mounted () {
        this.getArticles()
        this.getMe()
    }
}
</script>

<style scoped>
    .v-card {
        background-color: black;
        margin-bottom: 20px;
        color: beige;
        border: 1px solid white;
        width: 900px
    }

    .v-btn {
        color: beige;
        background-color: brown;
    }
</style>
