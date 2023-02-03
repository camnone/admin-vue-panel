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

@import '../../assets/styles/variables.scss';
input {
  position: relative;
  background: var(--background-color);
  line-height: 1.25;
  color: var(--font-main-color);
  padding: 0.875rem 1.375rem;
  width: 100%;
  border-radius: 0.5rem;
  transition: all .3s ease;
  z-index: 1;
  font-size: 1rem;
  border:1px solid var(--border-color);
  outline:none;
  &::placeholder{
    font-size: 0.9rem;
  }
  &:focus{
    border-color: $bg-blue;
  }
}
</style>