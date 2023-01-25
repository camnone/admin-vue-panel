import { useStore } from 'vuex'
import { ref } from 'vue'
import { $api } from '../api/index'
import { useRouter } from 'vue-router'
import { useMutation } from '@tanstack/vue-query'
export function useAuth() {
  const store = useStore()
  const router = useRouter()
  const password = ref('')
  const login = ref('')
  const { mutate:
    authorization,
    error } = useMutation(['LoginAuth'],
      () =>
        $api({
          url: "/users/login",
          type: "POST",
          auth: false,
          body: {
            password: password.value,
            login: login.value,
          }
        }),
      {
        onSuccess(data) {
          localStorage.setItem('token', data.token)
          Auth(data)
        },
      }
    ) 
  function Auth(data) {
    store.commit("setAuthUser", true)
    router.push('/')
    
  }

  return{
    authorization,
    error,
    password,
    login
  }

}