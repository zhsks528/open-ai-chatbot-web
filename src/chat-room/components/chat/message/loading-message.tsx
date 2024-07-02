import styled from 'styled-components'
import { Container } from '@titicaca/core-elements'

import { SpinnerBubble } from '../bubble'

import { useMessageGroup } from './message-group'

const LoadingMessageContainer = styled(Container)<{
  from: 'ASSISTANT' | 'USER'
}>`
  padding: ${({ from }) => (from === 'ASSISTANT' ? '0 41px' : '0 16px')};

  &:not(:first-child) {
    .chat-bubble {
      border-radius: 20px;
    }
  }
`

export function LoadingMessage({ children }: { children?: string }) {
  const { from } = useMessageGroup()

  return (
    <LoadingMessageContainer from={from}>
      <SpinnerBubble from={from}>{children}</SpinnerBubble>
    </LoadingMessageContainer>
  )
}
