import { useMutation, useQuery } from '@tanstack/vue-query'
import { computed, onMounted, ref } from 'vue'

import { $api } from '../api/index'

export function useGetPattern() {
	const dataList = ref([])
	const { data, isSuccess, isLoading, error, refetch } = useQuery(
		['pattern list'],
		() =>
			$api({
				url: '/pattern/'
			}),
		{
			onSuccess(data) {
				dataList.value = data
			},
			refetchOnWindowFocus: false,
			enabled: true
		}
	)

	return {
		dataList,
		isSuccess,
		isLoading,
		error,
		refetch
	}
}
