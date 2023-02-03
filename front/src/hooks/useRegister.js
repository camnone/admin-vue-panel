import { ref } from 'vue'
import { $api } from '../api/index'
import { useMutation } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export function useRegister() {
  const store = useStore()
  const router = useRouter()
  const password = ref('')
  const login = ref('')
  const name = ref('')
  const secondName = ref('')
  const bayerId = ref('')

  const { mutate:
    registration,
    isLoading,
    error } = useMutation(['LoginAuth'],
      () =>
        $api({
          url: "/auth/register",
          type: "POST",
          auth: false,
          body: {
            password: password.value,
            login: login.value,
            firstName: name.value,
            secondName: secondName.value,
            bayerId: bayerId.value
          }
        }),
      {
        onSuccess(data) {
          localStorage.setItem('token', data.token)
          register(data)
        },
      }


    )

  function register(data) {
    store.commit("setAuthUser", true)
    router.push('/')
  }
  return {
    password,
    login,
    registration,
    isLoading,
    error,
    name,
    secondName,
    bayerId
  }

}