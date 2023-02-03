<template>
  <div class="status-switcher">
    <button @click="pwaStatus" ref="statusBth"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusBth: 'theme1'
    }
  },
  methods: {
    pwaStatus(e) {
      this.statusBth === 'theme1' ? this.statusBth = 'theme2' : this.statusBth = 'theme1'

      if(this.statusBth === 'theme1') {
        localStorage.setItem('theme', 'white')
      } else {
        localStorage.setItem('theme', 'black')
      }
      e.target.classList.toggle('switch')
      console.log(this.statusBth)
    }
  },
  watch: {
    statusBth() {
      const bg = `var(--bg-color-${this.statusBth})`
      const mainText = `var(--main-text-color-${this.statusBth})`
      const secondText = `var(--secondary-text-color-${this.statusBth})`
      const borderColor = `var(--border-color-${this.statusBth})`

      document.body.style.setProperty('--background-color', bg)
      document.body.style.setProperty('--font-main-color', mainText)
      document.body.style.setProperty('--font-second-color', secondText)
      document.body.style.setProperty('--border-color', borderColor)
    }
  },
  mounted(){
    if(localStorage.getItem('theme') === 'black') {
      this.statusBth = 'theme2'
      this.$refs.statusBth.classList.add('switch')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.status-switcher {
  position: relative;
  background: var(--background-color);
  border: 1px solid var(--font-second-color);
  width: 2.25rem;
  height: 1rem;
  border-radius: 2.625rem;

  button {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    padding: 0;
    border: 2px solid $bg-blue;
    background: var(--background-color);
    overflow: hidden;
    margin-top: -.25rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .375rem;
    transition: all .3s ease;
    cursor: pointer;

    &.switch {
      border: 2px solid $bg-blue;
      background: #000 !important;

      margin-left: .75rem;
    }
  }
}
</style>