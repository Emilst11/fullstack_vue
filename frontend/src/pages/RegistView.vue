<template>
    <div class="h-screen d-flex align-center">
        <v-container>
            <v-card class="mx-auto px-6 py-8" max-width="344">
                <h1>Register</h1>
                <v-form @submit.prevent="handleSubmit">
                    <v-text-field v-model="form.name" type="text" class="mb-2" label="Name" clearable></v-text-field>
                    <v-text-field v-model="form.email" type="text" class="mb-2" label="Email" clearable></v-text-field>
                    <v-text-field 
                    v-model="form.password" 
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" 
                    :type="visible ? 'text' : 'password'" 
                    label="Password"
                    @click:append-inner="visible = !visible" 
                    clearable></v-text-field>
                    <br>
                    <v-btn color="success" size="large" type="submit" variant="elevated" block>
                        Sign Up
                    </v-btn>
                    <p>You already have an account? <RouterLink :to="{ name: 'login' }">Click here</RouterLink>
                    </p>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IAuthRegistPayload } from '../utils/interface/IAuth';
import { handleRegistration } from '../utils/services/authService';
import { useResponseStore } from '../utils/stores/responses/responseStore';
import { useRouter } from 'vue-router';

const { setResponse, clearResponse } = useResponseStore()

const form = ref<IAuthRegistPayload>({
    name: '',
    email: '',
    password: ''
})
const router = useRouter()
const visible = ref<boolean>(false)

const handleSubmit = async() => {
    const response = await handleRegistration(form.value)
    setResponse(response)
    if(response.status == 201){
        router.push('/dashboard')
    }

    setTimeout(() => {
        clearResponse()
    }, 2500);
}
</script>