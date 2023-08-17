import { defineStore } from 'pinia'
import axios from 'axios'
import { type TNewReview } from "../types"
import { headers } from "../types"
import { homePageData } from './home-page-data'

export const adminData = defineStore('adminData', () => {
    const homeData = homePageData()

    async function addNewReview (reviewData: TNewReview) {
        await axios.post('https://node-and-mongo-project.herokuapp.com/api/add-reviews', reviewData, { headers })
        // setNewReview(reviewData)
    }

    // function setNewReview (reviewData: TNewReview) {
    //     homeData.reviews.push(reviewData)
    // }

    async function removeReview (_id: string) {
        await axios.post('https://node-and-mongo-project.herokuapp.com/api/remove-review', {
            _id
        }, { headers })
        deleteSelectedReview(_id)
    }

    function deleteSelectedReview (reviewId: string) {
        const index = homeData.reviews.findIndex(review => review._id === reviewId)
        homeData.reviews.splice(index, 1)
    }

    return {
        addNewReview,
        removeReview
    }
})