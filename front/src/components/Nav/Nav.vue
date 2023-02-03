<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <div class="wrapper">
      </div>
      <div class="profile">
        <Switch />
        <Profile />
      </div>
    </div>
  </nav>
</template>

<script>
import Switch from '../UI/Switch.vue';
import SearchInput from '../UI/SearchInput.vue';
import Profile from '../Nav/Profile.vue';
export default {
  components: { SearchInput, Profile,Switch }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.nav {
  position: fixed;
  background:  var(--background-color);
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  padding-top: 0.5rem;
  padding-left: 16rem;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  z-index: 30;
  border-bottom:1px solid var(--border-color);
  &-wrapper {
    
    max-width: 72rem;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    display: flex;
    .profile{
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 15px;
    }
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