import { ref, computed } from 'vue'

export const countSliderMixin = {
    setup() {
        const width = ref(window.innerWidth)

        const getCountSlider = computed(() => {
            if (width.value <= 1200) {
                return 1
            } else {
                return 2
            }
        })

        return {
            getCountSlider
        }
    }
}