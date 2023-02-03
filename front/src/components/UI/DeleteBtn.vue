<template>
  <button class="btn red">
    <span>
      <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
        <path fill="currentColor"
          d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
        </path>
      </svg>
    </span>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn {
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  padding: 0.25rem;
  border-radius: 0.25rem;

  &:last-child {
    margin-right: 0;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    background: transparent;

    svg {
      background: transparent;
    }

  }

  &.red {
    background-color: #ef4444;
  }


}
</style>