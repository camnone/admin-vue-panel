<template>
  <input @input="updateInput">
</template>

<script>
export default {
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  border-color: #000;
  padding-left: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgb(255 255 255 / 1);
  border-width: 1px;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 100%;
  height: 3rem;
}
</style>