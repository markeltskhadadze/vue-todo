<script setup lang="ts">
  import { onMounted, computed, type Ref, ref} from 'vue'
  import { homePageData } from '../../stores/home-page-data'
  import { adminData } from '../../stores/admin-data'

  const homeData = homePageData()
  const admin = adminData()
  let fullName: Ref<string> = ref('')
  let reviewText: Ref<string> = ref('')

  const getIcon = computed(() => {
    return '/'
  })

  const getReviews = computed(() => {
    return homeData.reviews
  })

  async function addReview () {
    await admin.addNewReview({
      fullName: fullName.value,
      reviewText: reviewText.value
    })
  }

  async function deleteThisReview (id: string) {
    await admin.removeReview(id)
  }

  onMounted (async () => {
    await homeData.getReviews()
  })
</script>

<template>
  <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 modal-wrapper">
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            ADD NEW USER
          </h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-6 space-y-6 flex flex-col items-center">
          <p class="fields-name">Full Name</p>
          <input class="reviews-fields" v-model="fullName" />
          <p class="fields-name">Reviews description</p>
          <input class="reviews-fields" v-model="reviewText" />
        </div>
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button @click="addReview" data-modal-hide="defaultModal" type="button" class="add-review text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add review</button>
          <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-8">
    <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="add-review block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
      Add Review
    </button>
    <div v-for="(review, index) in getReviews" :key="index" class="flex gap-6 items-center review">
      <div class="flex gap-6 items-center">
        <img :src="getIcon + 'img_569204.png'" class="review-photo">
        <p>{{ review.fullName }}</p>
        <p>{{ review.reviewText }}</p>
      </div>
      <div>
        <img @click="deleteThisReview(review._id)" :src="getIcon + '1345874.png'" class="delete-icon">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .delete-icon {
    max-width: 25px;
    cursor: pointer;
  }
  .review-photo {
    max-width: 50px;
  }
  .review {
    border: 1px solid;
    border-radius: 10px;
    padding: 20px;
    justify-content: space-between;
  }
  .add-review {
    cursor: pointer;
    background: #808080;
    border: 1px solid #000000;
    color: #000000;
  }
  .add-review:hover {
    background: #5d5c5c;
    border: 1px solid #000000;
    color: #000000;
  }
  .modal-wrapper {
    background: #3a3a3a;
  }
  h3 {
    color: #909399;
  }
  .reviews-fields {
    border-radius: 20px;
    background: #818181;
    color: #ffffff;
    padding: 6px 10px;
  }
  .fields-name {
    color: #909399;
  }
</style>