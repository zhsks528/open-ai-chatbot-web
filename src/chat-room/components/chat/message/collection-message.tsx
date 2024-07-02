import { forwardRef, type ReactNode } from 'react'
import styled from 'styled-components'
import { Container } from '@titicaca/core-elements'

const HorizontalScrollList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 0 8px;
  padding: 0 41px;

  &::-webkit-scrollbar {
    display: none;
  }
`
const ListItem = styled.li`
  flex: 0 0 auto;
  width: fit-content;
`

interface CollectionMessageProps {
  children: ReactNode
}

type Ref = HTMLDivElement

export const CollectionMessage = Object.assign(
  forwardRef<Ref, CollectionMessageProps>(function CollectionMessage(
    { children },
    ref,
  ) {
    return (
      <Container ref={ref} css={{ width: '100%', padding: 0 }}>
        <HorizontalScrollList>{children}</HorizontalScrollList>
      </Container>
    )
  }),
  { Item: ListItem },
)
