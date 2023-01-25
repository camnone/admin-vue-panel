<template>
  <router-link class="link" to="/pwalist">
    <Item :name='"PWA"' :imgName="'pwa-svgrepo-com'"/>
  </router-link>
</template>

<script>
import Item from './Item.vue';

  export default {
    components: { Item }
}
</script>

<style lang="scss" scoped>

</style>