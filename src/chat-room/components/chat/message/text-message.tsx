import styled from 'styled-components'
import { Container } from '@titicaca/core-elements'

import { Role } from '@/chat-room/widgets/message-history/types'

import { TextBubble } from '../bubble'

import { useMessageGroup } from './message-group'

const TextMessageContainer = styled(Container)<{ from: Role }>`
  padding: ${({ from }) => (from === 'assistant' ? '0 41px' : '0 16px')};

  &:not(:first-child) {
    .chat-bubble {
      border-radius: 20px;
    }
  }
`

export function TextMessage({ children }: { children: string }) {
  const { from } = useMessageGroup()

  return (
    <TextMessageContainer from={from}>
      <TextBubble from={from}>{children}</TextBubble>
    </TextMessageContainer>
  )
}
