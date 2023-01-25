<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <div class="wrapper">
        <div>Add a template</div>
        <div>Add a language</div>
      </div>
      <Profile />
    </div>
  </nav>
</template>

<script>
import SearchInput from '../UI/SearchInput.vue';
import Profile from '../Nav/Profile.vue';
export default {
  components: { SearchInput, Profile }
}
</script>

<style lang="scss" scoped>
.nav {
  background: #1e293b;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  padding-top: 0.7rem;
  padding-left: 16rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  z-index: 30;

  &-wrapper {
    max-width: 72rem;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    display: flex;

    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 15px;
      color: #fff;

      div {
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }




}
</style>