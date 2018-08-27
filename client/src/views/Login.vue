<template>
<div class="login">
    <LoginForm/>
    <RegisterForm/>
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
