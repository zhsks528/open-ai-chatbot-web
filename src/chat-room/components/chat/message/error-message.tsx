import styled from 'styled-components'
import { Container } from '@titicaca/core-elements'

import { TextBubble } from '../bubble'

import { useMessageGroup } from './message-group'

const TextMessageContainer = styled(Container)<{ from: 'ASSISTANT' | 'USER' }>`
  padding: ${({ from }) => (from === 'ASSISTANT' ? '0 41px' : '0 16px')};

  &:not(:first-child) {
    .chat-bubble {
      border-radius: 20px;
    }
  }
`

export function ErrorMessage({ children }: { children: string }) {
  const { from } = useMessageGroup()

  return (
    <TextMessageContainer from={from}>
      <TextBubble from={from} $css={{ color: 'var(--palette-gray50)' }}>
        {children}
      </TextBubble>
    </TextMessageContainer>
  )
}
