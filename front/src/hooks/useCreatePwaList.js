import { useMutation } from '@tanstack/vue-query'
import { ref } from 'vue'

import { $api } from '../api/index'

import { useGetPwaItem } from './useGetPwaItem'

export function useCreatePwaList() {
	const { refetch } = useGetPwaItem()
	const status = ref('')
	const pattern = ref('')
	const domain = ref('')
	const language = ref('')
	const platform = ref('')

	const {
		mutate: createPwaList,
		isLoading,
		error
	} = useMutation(
		['LoginAuth'],
		() =>
			$api({
				url: '/pwa/',
				type: 'POST',
				auth: true,
				body: {
					status: status.value,
					pattern: pattern.value,
					domain: domain.value,
					language: language.value,
					platform: platform.value
				}
			}),
		{
			onSuccess() {
				refetch()
			}
		}
	)
	return {
		createPwaList,
		status,
		pattern,
		domain,
		isLoading,
		error,
		language,
		platform
	}
}
