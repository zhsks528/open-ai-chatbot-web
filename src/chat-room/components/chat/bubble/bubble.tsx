import { type ReactNode } from 'react'
import styled, { css, type CSSObject } from 'styled-components'
import { Container } from '@titicaca/core-elements'
import { LAYOUT } from '@/chat-room/components/layout'
import type { Role } from '@/chat-room/widgets/message-history/types'

export interface BubbleProp {
  from: Role
  $css?: CSSObject
}

const BubbleContainer = styled(Container)<BubbleProp>`
  position: relative;
  padding: 11px 16px;
  border-radius: 10px;
  min-height: 44px;
  max-width: ${LAYOUT.MIN_DEVICE_WIDTH - 1}px;

  ${({ from }) =>
    from === 'user'
      ? css`
          border-radius: 20px 4px 20px 20px;
          background-color: var(--palette-gray);
          color: var(--color-gray);
        `
      : css`
          border-radius: 4px 20px 20px;
          border: none;
          background-color: var(--palette-skyblue100);
          color: var(--color-gray);
        `}

  /** allow to override default bubble style */
  ${({ $css }) => $css}
`

export function Bubble({
  from,
  $css,
  children,
}: BubbleProp & { children: ReactNode }) {
  return (
    <BubbleContainer className="chat-bubble" from={from} $css={$css}>
      {children}
    </BubbleContainer>
  )
}
