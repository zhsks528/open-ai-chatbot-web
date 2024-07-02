import { useMutation } from '@tanstack/react-query'

import { postMessage } from '../services'

export function useBookerInfoEditMutation() {
  return useMutation({
    mutationFn: ({ message }: { message: string }) => postMessage({ message }),
  })
}
