<template>
  <transition  class="fade">
    <div v-if="show" class="loader-container">
      <div  class="loader-wrapper">
        <div class="loader">
          <div class="loader loader--inner"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data(){
    return{
      show: true
    }
  },
  methods:{
    hide(){
      setTimeout(() => {
      this.show = false
    }, 1000);
    }
  },
  mounted(){
    this.hide()
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/animation';
@import '../assets/styles/variables';

.loader-container{
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: $bg-color;
  z-index: 999;
  display: flex;
  justify-content:center;
  align-items: center;
  .loader-wrapper {
    width: 8rem;
    height: 8rem;
  
    .loader {
      width: 100%;
      height: 100%;
      border: 3px solid #162534;
      border-top-color: #2CD9FF;
      border-bottom-color: #7EFFB2;
      border-radius: 50%;
      animation: rotate 5s linear infinite;
    }
  
    .loader--inner {
      border-top-color: #7EFFB2;
      border-bottom-color: #2CD9FF;
      animation-duration: 2.5s;
    }
  }
}

</style>