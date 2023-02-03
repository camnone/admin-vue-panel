<template>
  <div class="dialog" v-if="show" @click="hideModal">
    <div @click.stop class="dialog-content">
      <slot></slot>
      <div class="close" @click="hideModal">
        <svg viewBox="0 0 24 24" width="20" height="20" class="inline-block">
          <path fill="currentColor"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect';
export default {
  components: { Multiselect },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  display: flex;
  border: 1px solid var(--border-color);

  &-content {
    position: relative;
    padding: 40px 40px 15px 40px;
    margin: auto;
    background: var(--background-color);
    border-radius: 12px;

    .close {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      width: 30px;
      height: 30px;
      justify-content: center;
      align-items: center;
      color: var(--font-main-color)

      svg {
        width: 100%;
      }
    }
  }
}
</style>