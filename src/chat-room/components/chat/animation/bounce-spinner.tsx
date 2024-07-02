import React from 'react'
import styled from 'styled-components'

const Spinner = styled.svg`
  circle {
    animation: bounce 1s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both;
  }

  circle:nth-child(2) {
    animation-delay: 0.15s;
  }

  circle:nth-child(3) {
    animation-delay: 0.25s;
  }

  @keyframes bounce {
    0% {
      transform: translateY(4px);
      fill: var(--palette-skyblue20);
    }

    50% {
      transform: translateY(-4px);
      fill: var(--palette-skyblue100);
    }

    100% {
      transform: translateY(4px);
      fill: var(--palette-skyblue20);
    }
  }
`

const RADIUS = 3
const WIDTH = 30
const HEIGHT = 16
const VIEW_BOX = `0 0 ${WIDTH} ${HEIGHT}`
const CY = HEIGHT / 2

export function BounceSpinner() {
  return (
    <Spinner
      data-testid="bounce-spinner"
      viewBox={VIEW_BOX}
      width={WIDTH}
      height={HEIGHT}
    >
      <circle cx={3} cy={CY} r={RADIUS} />
      <circle cx={13} cy={CY} r={RADIUS} />
      <circle cx={23} cy={CY} r={RADIUS} />
    </Spinner>
  )
}
