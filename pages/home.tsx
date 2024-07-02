import { GetServerSidePropsResult } from 'next'
import { DehydratedState, QueryClient, dehydrate } from '@tanstack/react-query'

import { Home } from '@/home'

export default function ChatRoomPage() {
  return <Home />
}

export function getServerSideProps(): GetServerSidePropsResult<{
  dehydratedState: DehydratedState
}> {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
