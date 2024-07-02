import { Container } from '@titicaca/core-elements'

import { UserQuestion } from './user-question'
import { AssistantReply } from './assistant-reply'
import { usePrompt } from '../message-prompt/prompt-context'
import {
  MarkdownMessage,
  MessageGroup,
  SpinnerBubble,
} from '@/chat-room/components/chat'
import { AssistantProfile } from '@/chat-room/components/chat/profile/assistant-profile'
import { SAMPLE_MESSAGES } from '@/chat-room/sample'

export function MessageHistoryList() {
  const { messages, isPending } = usePrompt()

  return (
    <>
      <Container
        css={{
          padding: '20px 0',
          height: 'calc(100vh - 116px)',
          overflow: 'scroll',
          backgroundColor: 'var(--color-brightGray)',
        }}
      >
        <MessageGroup from="assistant">
          <MarkdownMessage>
            {`안녕하세요, 여행자님!\n<br/>여행자님의 편리한 이동을 도와줄 맞다AI에요 🤖`}
          </MarkdownMessage>
        </MessageGroup>

        {messages.map(({ role, content }) => {
          return (
            <>
              {role === 'assistant' ? (
                <AssistantReply messages={content} />
              ) : role === 'user' ? (
                <UserQuestion messages={content} />
              ) : null}
            </>
          )
        })}

        {isPending ? (
          <Container position="relative" css={{ marginBottom: 16 }}>
            <AssistantProfile />
            <Container css={{ padding: '0 41px' }}>
              <SpinnerBubble from="assistant" />
            </Container>
          </Container>
        ) : null}
      </Container>
    </>
  )
}
