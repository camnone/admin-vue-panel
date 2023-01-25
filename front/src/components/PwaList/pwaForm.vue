<script setup>
import { useCreatePwaList } from '../../hooks/useCreatePwaList'
import { defineEmits } from 'vue'
const emit = defineEmits(['close'])
const { createPwaList, status, domain, isLoading, error, language, platform, pattern } = useCreatePwaList()

const createPWA = () => {
  createPwaList()
  emit('close')
}
</script>
<template>
  <form @submit="createPWA" @submit.prevent>
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

    <select v-model="status" required>
      <option value="" hidden>Статус</option>
      <option value="true"> On</option>
      <option value="false"> Off</option>
    </select>

    <input v-model="domain" required type="text" placeholder="Домен">
    <input v-model="language" required type="text" placeholder="Язык">
    <button>Добавить</button>
  </form>
</template>


<style lang="scss" scoped>
form {
  row-gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  select {
    color: #fff;
    width: 100%;
    padding: 10px;
    background-color: rgb(30 41 59);
    border: 1px solid rgb(247 248 249 / 10%);
    border-radius: 10px;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }

  input {
    color: #fff;
    width: 100%;
    min-width: 300px;
    height: 3rem;
    padding: 10px;
    background-color: rgb(30 41 59);
    border: 1px solid rgb(247 248 249 / 10%);
    border-radius: 10px;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }

  button {
    cursor: pointer;
    background-color: rgba(37, 99, 235);
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
  }
}
</style>