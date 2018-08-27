<template>
<div class="article">
    <div v-if="token">
        <AddPost></AddPost>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios'
import AddPost from '@/components/AddPost.vue'

export default {
    name: 'article',
    components: {
        AddPost
    },

    data () {
        return {
            token: localStorage.getItem('token')
        }
    }
}
</script>

<style scoped>

</style>
