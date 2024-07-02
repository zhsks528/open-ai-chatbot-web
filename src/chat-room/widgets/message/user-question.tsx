import { MessageGroup, TextMessage } from '@/chat-room/components/chat'

interface UserQuestion {
  messages: {
    text: string
  }[]
}

export function UserQuestion({ messages }: UserQuestion) {
  return (
    <MessageGroup from="user">
      {messages.map(({ text }) => (
        <TextMessage>{text}</TextMessage>
      ))}
    </MessageGroup>
  )
}
