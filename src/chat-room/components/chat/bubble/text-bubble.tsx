import styled from 'styled-components'
import { Text as BaseText } from '@titicaca/core-elements'

import { animation } from '../animation/typewriter'

import { Bubble, type BubbleProp } from './bubble'

export const Text = styled(BaseText)<{ $typing: boolean }>`
  position: relative;
  width: fit-content;
  display: inline;
  line-height: 21px;
  ${({ $typing }) => $typing && animation}
  color: inherit;
`

interface TextBubble extends BubbleProp {
  $typing?: boolean
  children: string
}

export function TextBubble({
  from,
  $css,
  $typing = false,
  children,
}: TextBubble) {
  return (
    <Bubble from={from} $css={$css}>
      <Text lineHeight="21px" $typing={$typing}>
        {children}
      </Text>
    </Bubble>
  )
}
