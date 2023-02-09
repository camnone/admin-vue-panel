<template>
  <div class="dialog" v-if="show" @click="hideModal">
    <div @click.stop class="dialog-content">
      <slot></slot>
			<Close @click="hideModal"/>
    </div>
  </div>
</template>

<script>
import Close from '../UI/Close.vue'
export default {
	components:{Close},
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
  }
}
</style>