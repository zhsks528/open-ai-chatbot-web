import { useRouter } from 'next/router'
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

export function MessageHistoryList() {
  const { query } = useRouter()
  const { messages, isPending, customMessages, isLoading } = usePrompt()

  const { entry_departure } = query

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

          {entry_departure ? (
            <MarkdownMessage>
              {`간사이 공항에 도착하셨네요, 어느 호텔로 가시나요?`}
            </MarkdownMessage>
          ) : null}
        </MessageGroup>

        {entry_departure
          ? customMessages.map(({ role, content }) => {
              return (
                <>
                  {role === 'assistant' ? (
                    <CustomAssistantReply messages={content} />
                  ) : role === 'user' ? (
                    <UserQuestion messages={content} />
                  ) : null}
                </>
              )
            })
          : null}

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

        {isPending || isLoading ? (
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

interface AssistantReplyProps {
  messages: {
    content: {
      // 대표 이미지
      text: string
    }[]
  }
}

export function CustomAssistantReply({ messages }: AssistantReplyProps) {
  console.log('messages', messages)

  return (
    <>
      <MessageGroup from="assistant">
        {messages.map(({ text }) => (
          <>
            <MarkdownMessage>{text}</MarkdownMessage>
          </>
        ))}
      </MessageGroup>
    </>
  )
}
