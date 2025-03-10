import { GetServerSidePropsResult } from 'next'
import { DehydratedState, QueryClient, dehydrate } from '@tanstack/react-query'

import { ChatRoom } from '@/chat-room'
import { PromptMessageProvider } from '@/chat-room/widgets/message-prompt/prompt-context'

export default function ChatRoomPage() {
  return (
    <PromptMessageProvider>
      <ChatRoom />
    </PromptMessageProvider>
  )
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
