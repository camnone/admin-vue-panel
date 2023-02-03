import { $api } from '../api/index'
import { ref, onMounted } from 'vue'
import { useMutation } from '@tanstack/vue-query'
export function useProfile() {
  const name = ref('')
  const secondName = ref('')
  const bayerId = ref('')

  const { mutate:
    getProfile,
    isLoading,
    error } = useMutation(['getProfile'],
      () =>
        $api({
          url: "/users",
        }),
      {
        onSuccess(data) {
          getName(data)
        }
      },
    )
  function getName(data) {
    secondName.value = data.secondName
    name.value = data.firstName
    bayerId.value = data.bayerId
  }
  onMounted(() => {
    getProfile()
  })


  return {
    name,
    secondName,
    bayerId
  }

}