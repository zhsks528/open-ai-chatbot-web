import { Container } from '@titicaca/core-elements'
import { Header, MessagePrompt } from './widgets'
import { MessageHistoryList } from './widgets/message/message-history-list'

export function ChatRoom() {
  return (
    <Container centered css={{ maxWidth: 768 }}>
      <Header />

      <MessageHistoryList />

      <MessagePrompt />
    </Container>
  )
}
