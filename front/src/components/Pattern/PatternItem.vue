<template>
  <div class="pattern-item">
    <div class="id">
      <div>{{ pattern.id }}</div>
    </div>
    <div class="title">{{ pattern.name }}</div>
    <DeleteBtn />
  </div>
</template>

<script>
import DeleteBtn from '../UI/DeleteBtn.vue';


export default {
  props: {
    pattern: {
      type: Object,
      required: true
    }
  },
  components: { DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import './Pattern.module.scss'
</style>