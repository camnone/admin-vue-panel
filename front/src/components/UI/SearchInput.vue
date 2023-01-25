<template>
  <div class="input">
    <div class="search-box">
      <button class="btn-search">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
      <input :value="modelValue" @input="updateInput" type="text" class="input-search" placeholder="Type to Search...">
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      modelValue: [String, Number]
    },
    methods:{
      updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
    }
  }
</script>

<style lang="scss" scoped>
.search-box {
  width: fit-content;
  height: fit-content;
  position: relative;
}

.input-search {
  height: 3rem;
  width: 3rem;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: #0f172a;
  padding-right: 40px;
  color: #fff;
}

.input-search::placeholder {
  color: rgba(255, 255, 255, .5);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}

.btn-search {
  width: 3rem;
  height: 3rem;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color: #ffffff;
  background-color: transparent;
  pointer-events: painted;

  svg {
    background: transparent;
  }
}

.btn-search:focus~.input-search {
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

.input-search:focus {
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
</style>