import { ref, onMounted, computed } from 'vue'
import { $api } from '../api/index'
import { useMutation, useQuery } from '@tanstack/vue-query'
export function useGetPwaItem() {
  const dataList = ref([])
  const { data, isSuccess, isLoading, error, refetch } = useQuery(
    ['home page counters'],
    () =>
      $api({
        url: '/pwa/',
      }),
    {
      onSuccess(data) {
        dataList.value = data
      },
      refetchOnWindowFocus: false,
      enabled:true
    },
  )


  return {
    dataList,
    isSuccess,
    isLoading,
    error,
    refetch
  }
}