<template>
  <aside class="aside">
    <div class="aside-container">
      <div class="aside-heading">
        <div class="aside-heading-title">
          <span @click="$router.push('/')">2nGeeks</span>
        </div>
      </div>
      <div class="aside-wrapper">
        <Paper />
      </div>
      <div class="aside-footer" @click="logout">
        <div class="img">
          <svg viewBox="0 0 24 24" width="20" height="20" class="inline-block">
            <path fill="currentColor"
              d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z">
            </path>
          </svg>
        </div>
        <span>Logout</span>
      </div>
    </div>
  </aside>
</template>

<script>
import Paper from './ListItem.vue';
import router from '../../router/router'
export default {
  components: { Paper },
  methods: {
    logout() {
      router.push('/auth')
      this.$store.commit("setAuthUser", false)
      localStorage.clear()
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  color: #fff;
  height: 100vh;
  width: 15rem;
  display: flex;
  overflow: hidden;
  padding: 0.7rem 0 0.7rem 0.5rem;
  left: 0;
  z-index: 40;
  top: 0;
  position: fixed;

  &-container {
    border-radius: 1rem;
    background-color: #0f172a;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    flex: 1 1 0%;
  }

  &-heading {
    cursor: pointer;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    background-color: #0f172a;

    span {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      background-color: #0f172a;
    }


  }

  &-wrapper {
    background-color: #0f172a;
    display: flex;
    row-gap: 20px;
    flex: 1 1 0%;
    flex-direction: column;
    padding-top: 15px;

  }


  &-footer {
    cursor: pointer;
    border-radius: 0 0 1rem 1rem;
    padding: 1rem 1rem;
    background-color: #3b82f6;
    display: flex;
    align-items: center;
    transition: background-color .2s ease;

    .img {
      display: flex;
      justify-content: center;
      width: 3rem;
      background: transparent;
      align-items: center;

      svg {
        background: transparent;
      }
    }

    span {
      font-size: 1.1rem;
      background: transparent;
    }

    &:hover {
      background-color: #2563eb;
    }
  }
}
</style>