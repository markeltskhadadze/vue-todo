<template>
  <div>
    <h2>Our Possibilities</h2>
    <PossibilitiesBlock />
  </div>
</template>

<script>
import PossibilitiesBlock from './PossibilitiesBlock.vue'

export default {
  name: 'OurPossibilities',
  components: {
    PossibilitiesBlock
  }
}
</script>

<style scoped>
.possibilities-block {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>