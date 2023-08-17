import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { type TPosts, type TReviews, type TService, type TProjectInfo } from '../types'

export const homePageData = defineStore('homePageData', () => {
    const posts = reactive<TPosts[]>([])
    const reviews = reactive<TReviews[]>([])
    const services = reactive<TService[]>([])
    const projectInfo = reactive<TProjectInfo[]>([])

    async function getPosts () {
        const result = await axios.get<TPosts[]>('https://node-and-mongo-project.herokuapp.com/api/posts')

        posts.push(...result.data)
        return posts
    }

    async function getReviews () {
        const result = await axios.get<TReviews[]>('https://node-and-mongo-project.herokuapp.com/api/reviews')

        reviews.push(...result.data)
        return reviews
    }

    async function getServices () {
        const result = await axios.get<TService[]>('https://node-and-mongo-project.herokuapp.com/api/services')

        services.push(...result.data)
        return services
    }

    async function getProjectInfo () {
        const result = await axios.get<TProjectInfo[]>('https://node-and-mongo-project.herokuapp.com/api/projects')

        projectInfo.push(...result.data)
        return projectInfo
    }

    return {
        posts,
        reviews,
        services,
        projectInfo,
        getReviews,
        getPosts,
        getServices,
        getProjectInfo
    }
})