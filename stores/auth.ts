import {type Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { type TUserData } from '../types'
import router  from '../router/index'

export const auth = defineStore('auth', () => {
    const token: Ref<string> = ref('')
    const isAuthenticated: Ref<boolean> = ref(false)
    const user = ref<TUserData[]> ([])
    const errorMessage: Ref<string> = ref('')

    function setToken (tokenData: string | null | undefined) {
        if (tokenData) {
            token.value = tokenData
            localStorage.setItem('token', tokenData)
            isAuthenticated.value = true
            // axios.defaults.headers.common['Authorization'] = tokenData
        }
    }

    async function login (userData: TUserData) {
        try {
            const result = await axios.post('https://node-and-mongo-project.herokuapp.com/api/login', userData)
            setToken(result.data.token)
            user.value.push(userData)
            router.push('/admin/dashboard')
        } catch (error) {
            errorMessage.value = 'Invalid Credentials'
        }
    }

    function signOut () {
        token.value = ''
        isAuthenticated.value = false
        // delete axios.defaults.headers.common.Authorization
        localStorage.removeItem('token')
        router.push('/admin')
    }

    return {
        token,
        setToken,
        isAuthenticated,
        login,
        user,
        signOut,
        errorMessage
    }
})