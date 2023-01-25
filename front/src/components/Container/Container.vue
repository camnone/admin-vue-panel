<template>
  <div class="container">
    <div class="site">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  padding: 4rem 1rem 5rem 15rem;
  width: auto;
  min-height: 100vh;
}

.site {
  max-width: 72rem;
  margin: 0 auto;
  padding-top: 3rem;
  display: flex;
  row-gap: 50px;
  flex-direction: column;
}
</style>