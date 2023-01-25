
<script setup>
import Input from '../components/UI/Input.vue'
import { useAuth } from '../hooks/userAuth'
const { authorization, error, password, login } = useAuth()
</script>

<template>
  <div class="container">
    <div class="error" v-if="error">{{ error }}</div>
    <form @submit.prevent>
      <div class="header">
        <div class="wrapper">
          <label>Login</label>
          <div>
            <div class="relative">
              <Input v-model="login" type="login" autoComplete="username" placeholder="Login" />
            </div>
          </div>
        </div>
        <div class="wrapper">
          <label>Password</label>
          <div>
            <div class="relative">
              <Input v-model="password" type="password" autocomplete="password" placeholder="Password" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="wrapper">
          <button @click="authorization" class="login">Login</button>
          <button @click="$router.push('/registration')" class="login">Registration</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  form {
    width: 33.33%;
    background-color: rgb(255 255 255 / 1);
    border-radius: 1rem;
    flex-direction: column;
    display: flex;

    .header {
      padding: 1rem 1.5rem;
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
      padding: 0 1.5rem 1rem 1rem;

      .wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        column-gap: 15px;

        button {
          color: #fff;
          padding: 1rem 0.8rem;
          background-color: rgb(37 99 235 / 1);
          border-width: 1px;
          border-radius: 0.25rem;
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          display: flex;
          width: 33%;
        }
      }
    }
  }
}
</style>