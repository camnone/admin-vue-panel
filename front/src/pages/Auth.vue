
<script setup>
import Button from '../components/UI/btn.vue';
import Input from '../components/UI/Input.vue'
import { useAuth } from '../hooks/userAuth'
const { authorization, error, password, login } = useAuth()
</script>

<template>
  <div class="container">
    <div class="error" v-if="error">{{ error }}</div>
    <form @submit.prevent>
      <div class="center-container">
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
          <Button @click="authorization">Login</Button>
          <Button @click="$router.push('/registration')">Registration</Button>
        </div>
      </div></div>
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

  form {
    width: 33.33%;
    background-color: var(--background-color);
    border-radius: 1rem;
    border: 1px solid var(--border-color);
    flex-direction: column;
    display: flex;

    .center-container{
      padding: 1rem 1.5rem;
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
        column-gap: 15px;
      }
    }
  }
}
</style>