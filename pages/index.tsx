import { GetServerSidePropsResult } from 'next'
import { DehydratedState, QueryClient, dehydrate } from '@tanstack/react-query'

import { ChatRoom } from '@/chat-room'

export default function ChatRoomPage() {
  return <ChatRoom />
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
