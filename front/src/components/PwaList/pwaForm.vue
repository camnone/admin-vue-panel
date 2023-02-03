<script setup>
import { useCreatePwaList } from '../../hooks/useCreatePwaList'
import { defineEmits,ref } from 'vue'
import Button from '../UI/btn.vue'
import Input from '../UI/Input.vue'
const emit = defineEmits(['close'])
const { createPwaList, status, domain, isLoading, error, language, platform, pattern } = useCreatePwaList()

const createPWA = () => {
  createPwaList()
  emit('close')
}

</script>
<template>
  <form @submit="createPWA" @submit.prevent>
    <div class="block-first">
      <select v-model="pattern" required>
        <option value="" hidden>Выберите шаблон</option>
        <option value="rob-top">rob-top</option>
        <option value="rob-top">asd12s</option>
        <option value="rob-top">dsa12dsa</option>
        <option value="rob-top">12dsgr12</option>
      </select>

      <select v-model="platform" required>
        <option value="" hidden>Выберите платформу</option>
        <option value="Android">Android</option>
        <option value="IOS">IOS</option>
        <option value="Windows">Windows</option>
      </select>
    </div>

    <select v-model="status" required>
      <option value="" hidden>Статус</option>
      <option value="true"> On</option>
      <option value="false"> Off</option>
    </select>

    <Input v-model="domain" required type="text" placeholder="Домен" />

    <select v-model="language" required>
      <option value="" hidden>Язык</option>
      <option value="RU">RU</option>
      <option value="EN"> EN</option>
    </select>

    <Button>Добавить</Button>
  </form>
</template>


<style lang="scss" scoped>

form {
  row-gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  select {
    font-size: 1rem;
    font-weight: 300;
    color: var(--font-main-color);
    width: 100%;
    padding: 10px;
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 0.7rem 1.3rem;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }



  .block-first {
    display: flex;
    column-gap: 20px;
  }

  input {
    padding: 0.7rem 1.3rem;
  }

}
</style>