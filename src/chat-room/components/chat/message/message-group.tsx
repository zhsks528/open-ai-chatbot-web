import { createContext, useContext, type ReactNode } from 'react'
import { Container, FlexBox } from '@titicaca/core-elements'

import { AssistantProfile } from '../profile/assistant-profile'
import type { Role } from '@/chat-room/widgets/message-history/types'

interface Context {
  from: Role
}

const Context = createContext<Context | undefined>(undefined)

export function MessageGroup({
  from,
  children,
}: {
  from: Role
  children: ReactNode
}) {
  return (
    <Context.Provider value={{ from }}>
      <Container position="relative" css={{ marginBottom: 16 }}>
        {from === 'assistant' ? <AssistantProfile /> : null}
        <FlexBox
          flex
          flexDirection="column"
          alignItems={from === 'assistant' ? 'flex-start' : 'flex-end'}
          gap="8px"
          css={{ padding: 0 }}
        >
          {children}
        </FlexBox>
      </Container>
    </Context.Provider>
  )
}

export function useMessageGroup() {
  const value = useContext(Context)

  if (value === undefined) {
    throw new Error('MessageGroup is not defined')
  }

  return value
}
