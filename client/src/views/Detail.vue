<template>
    <div class="detail">
        <bigArticle></bigArticle>
    </div>
</template>

<script>
import axios from 'axios'
import bigArticle from '@/components/bigArticle.vue'
export default {
    name: 'detail',
    components: {
        bigArticle
    },

    mounted () {
        console.log(this.$route.params.id);
    }
}
</script>

<style>

</style>
