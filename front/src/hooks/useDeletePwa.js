import { $api } from '../api/index'
import { useGetPwaItem } from './useGetPwaItem'
import { useMutation } from '@tanstack/vue-query'
export function useDeletePwa() {
  const { refetch } = useGetPwaItem()
  const { mutate:
    deletePwa,
    error } = useMutation(['DeletePwa'],
      async (id, refetch) =>
        await $api({
          url: "/pwa/delete",
          type: "POST",
          auth: true,
          body: {
            "PwaIds": id
          }
        }),
      {
        onSuccess() {
          refetch()
        }
      }
    )
  return {
    deletePwa,
    error,
  }
}