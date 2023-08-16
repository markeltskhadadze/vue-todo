import { defineStore } from 'pinia'
import axios from 'axios'

export const sendForm = defineStore('sendForm', () => {
    async function sendPhoneNumber (phoneNumber: string) {
        console.log(phoneNumber)
        await axios.post('https://node-and-mongo-project.herokuapp.com/api/send-phone', {
            phoneNumber
        })
    }

    return {
        sendPhoneNumber
    }
})