<template>
<div class="login">
    <v-layout wrap>
        <v-flex xs6>
        <LoginForm/>
    </v-flex>

    <v-flex xs6>
        <RegisterForm/>
    </v-flex>
    </v-layout>
</div>
    
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
export default {
    name: 'login',
    components: {
        LoginForm,
        RegisterForm
    }
}
</script>

<style>

</style>
