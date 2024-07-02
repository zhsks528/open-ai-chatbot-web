export type Role = 'assistant' | 'user'

// TODO: 'text' | 'image'
type messageType = string

interface Entity<T extends messageType> {
  type: T
  message: string
}

export type UserMessageEntity = Entity<string>

export interface UserMessage {
  role: 'user'
  content: UserMessageEntity[]
}

export type AssistantMessageEntity = Entity<messageType>

export interface AssistantMessage {
  role: 'assistant'
  /** 동일 streamId 에 대해서 여러 응답이 존재할 수 있습니다. */
  content: AssistantMessageEntity[]
}
