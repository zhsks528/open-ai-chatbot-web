import { Text } from '@titicaca/core-elements'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: var(--color-blue);
  color: white;
`

export function Header() {
  return (
    <HeaderWrapper>
      <Text center size={20} color="black" css={{ padding: 20 }}>
        맞다AI
      </Text>
    </HeaderWrapper>
  )
}
