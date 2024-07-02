import { Text } from '@titicaca/core-elements'

import { BounceSpinner } from '../animation/bounce-spinner'

import { Bubble, type BubbleProp } from './bubble'

interface SpinnerBubble extends BubbleProp {
  children?: string
}

export function SpinnerBubble({ from, children }: SpinnerBubble) {
  return (
    <Bubble from={from}>
      {children ? (
        <Text
          inline
          lineHeight="21px"
          css={{ color: 'var(--palette-gray40)', marginRight: 10 }}
        >
          {children}
        </Text>
      ) : null}
      <BounceSpinner />
    </Bubble>
  )
}
