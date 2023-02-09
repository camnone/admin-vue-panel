<template>
  <div>
    <div class="pattern-list">

      <PatternItem :pattern="pattern" v-for="pattern in patterns" :key="pattern.id" />

    </div>
  </div>
</template>

<script>
import PatternItem from './PatternItem.vue';
export default {
  components: { PatternItem },
  props: {
    patterns: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Pattern.module.scss'
</style>