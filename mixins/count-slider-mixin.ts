import { ref, computed, onMounted } from 'vue'

export const countSliderMixin = {
    setup() {
        const width = ref(0)

        const getCountSlider = computed(() => {
            if (width.value <= 1200) {
                return 1
            } else {
                return 2
            }
        })

        onMounted(() => {
            if (process.client) {
                width.value = window.innerWidth
                window.addEventListener('resize', () => {
                    width.value = window.innerWidth
                })
            }
        })

        return {
            getCountSlider
        }
    }
}