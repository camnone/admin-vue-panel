

<script setup>
import router from '../router/router'
import Input from '../components/UI/Input.vue'
import Button from '../components/UI/btn.vue';
import { useRegister } from '../hooks/useRegister';
const { password, login, registration, isLoading, error, name, secondName, bayerId } = useRegister();
</script>
<template>
  <div class="container">
    <div class="error" v-if="error">{{ error }}</div>
    <form @submit.prevent>
      <div @click="router.push('/auth')" class="back">
        <img class="back" src="../assets/img/back.png" alt="arrow-back">
      </div>
      <div class="center-container">
        <div class="header">
          <div class="wrapper">
            <label>Логин</label>
            <div>
              <div class="relative">
                <Input v-model="login" type="text" autoComplete="username" placeholder="Логин" />
              </div>
            </div>
          </div>
          <div class="wrapper">
            <label>Пароль</label>
            <div>
              <div class="relative">
                <Input v-model="password" type="password" autocomplete="password" placeholder="Пароль" />
              </div>
            </div>
          </div>
          <div class="wrapper">
            <label>Имя</label>
            <div>
              <div class="relative">
                <Input v-model="name" autocomplete="name" placeholder="Имя" />
              </div>
            </div>
          </div>
          <div class="wrapper">
            <label>Фамилия</label>
            <div>
              <div class="relative">
                <Input v-model="secondName" autocomplete="Фамилия" placeholder="Фамилия" />
              </div>
            </div>
          </div>
          <div class="wrapper">
            <label>Байер ID</label>
            <div>
              <div class="relative">
                <Input v-model="bayerId" :autocomplete="'bayerId'" :placeholder="'bayerId'" />
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="wrapper">
            <Button @click="registration">Register</Button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.container {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .back {
    cursor: pointer;
    position: absolute;
    top: 5px;
    left: 10px;
    width: 30px;
    height: auto;
  }

  form {
    position: relative;
    width: 33.33%;
    background-color: $bg-color;
    border-radius: 1rem;
    flex-direction: column;
    display: flex;
    border: 1px solid $secondary-color;
    .center-container{
      padding: 3rem 1.5rem;
    }
    .header {
      
      flex: 1 1 0%; 

      .wrapper {
        margin-bottom: 1rem;
      }

      label {
        font-weight: 700;
        display: block;
        margin-bottom: 0.5rem;
      }

      .relative {
        position: relative;

      }
    }

    .footer {
      

      .wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}

.error {
  background-color: red;
  padding: 10px;
  margin-bottom: 10px;
  color: #fff;
}
</style>