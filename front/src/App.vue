<template>
  <Aside v-if="this.$store.state.isAuth" />
  <Nav v-if="this.$store.state.isAuth" />
  <Preloader/>
  <router-view />
</template>

<script>
import Nav from './components/Nav/Nav.vue';
import Aside from './components/Aside/Aside.vue';
import Preloader from './components/Preloader.vue';
export default {
  components: { Aside, Nav, Preloader },
  created(){
    if(localStorage.getItem('token')){
     this.$store.commit("setAuthUser", true)
    }
  }
}
</script>