import styled from 'styled-components'
import { Container } from '@titicaca/core-elements'

import { MarkdownBubble } from '../bubble'

import { useMessageGroup } from './message-group'

const MarkdownMessageContainer = styled(Container)<{
  from: 'ASSISTANT' | 'USER'
}>`
  padding: ${({ from }) => (from === 'ASSISTANT' ? '0 41px' : '0 16px')};

  &:not(:first-child) {
    .chat-bubble {
      border-radius: 20px;
    }
  }
`

export function MarkdownMessage({ children }: { children: string }) {
  const { from } = useMessageGroup()

  return (
    <MarkdownMessageContainer from={from}>
      <MarkdownBubble from={from}>{children}</MarkdownBubble>
    </MarkdownMessageContainer>
  )
}
