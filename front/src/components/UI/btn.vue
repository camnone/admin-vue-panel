<template>
      <button> <slot></slot></button>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
button {
  color: $bg-color;
  padding: 0.8rem 0.8rem;
  background-color: $bg-blue;
  border-width: 1px;
  border:none;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  width: 33%;
}
</style>