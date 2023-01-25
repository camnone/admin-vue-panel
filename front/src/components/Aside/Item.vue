<template>
  <div class="papper">
    <div class="img">
      <img :src="`/src/assets/${imgName}.svg`">
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    imgName: {
      type: String,
      required: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.papper {
  cursor: pointer;
  background-color: #0f172a;
  display: flex;
  align-items: center;
  padding-left: 20px;
  column-gap: 10px;

  .img {
    width: 1.7rem;
    height: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    background-color: transparent;

    img {
      width: 100%;
      height: 100%;
    }
  }

  span {
    background-color: #0f172a;
    padding-right: 3.6rem;
    display: flex;
    font-size: 1.2rem;
    font-weight: 500;
  }

  &:hover {
    &-papper {
      span {
        opacity: 0.8;
      }
    }
  }
}
</style>