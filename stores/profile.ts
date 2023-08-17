import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { headers } from '../index'
import { type TProfile } from '../types'

export const profile = defineStore('profile', () => {

    const profile = reactive<TProfile[]>([])

    async function getProfile () {
        const result = await axios.get<TProfile>('https://node-and-mongo-project.herokuapp.com/api/profile', { headers })

        profile.push(result.data)

    }

    async function updateUser (userData: TProfile) {
        const result = await axios.post(`https://node-and-mongo-project.herokuapp.com/api/update/${userData._id}`, userData, { headers })

        profile.push(result.data)
    }

    return {
        getProfile,
        profile,
        updateUser
    }
})