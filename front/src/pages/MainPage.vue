<template>
    <Container>
      <div class="main-title">Привет, это главная страница! Но она пока пустая ;()</div>
    </Container>
</template>

<script setup>
import Container from '../components/Container/Container.vue';
</script>

<style lang="scss" scoped>
.main-title{
  text-align:center; 
  color:var(--main-text-color);
}
</style>