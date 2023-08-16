<script setup lang="ts">
  import { type PropType, ref} from 'vue'
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  const options = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  })

  const props = defineProps({
    chartId: {
      type: String as PropType<string>
    },
    datasetIdKey: {
      type: String as PropType<string>
    },
    cssClasses: {
      type: String as PropType<string>
    },
    styles: {
      type: Object as PropType<Object>
    },
    width: {
      type: Number as PropType<number>
    },
    height: {
      type: Number as PropType<number>,
      default: 80
    },
    selectedDataBar: {
      type: Object as PropType<any>,
      default: undefined
    }
  })

</script>
<template>
  <Bar :data="props.selectedDataBar"
       :options="options"
       :chart-id="props.chartId"
       :dataset-id-key="props.datasetIdKey"
       :css-classes="props.cssClasses"
       :styles="props.styles"
       :width="props.width"
       :height="props.height" />
</template>
