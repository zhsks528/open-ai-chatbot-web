import styled from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'

import { MessageGroup } from './message-group'
import { LoadingMessage } from './loading-message'
import { TextMessage } from './text-message'
import { CollectionMessage } from './collection-message'
import { ErrorMessage } from './error-message'

const meta: Meta<typeof MessageGroup> = {
  component: MessageGroup,
}

export default meta

export const Loading: StoryObj<typeof MessageGroup> = {
  render: () => (
    <MessageGroup from="ASSISTANT">
      <LoadingMessage />
    </MessageGroup>
  ),
}

export const Text: StoryObj<typeof MessageGroup> = {
  render: (args) => (
    <MessageGroup {...args}>
      <TextMessage>텍스트 형식의 메시지 예시입니다.</TextMessage>
      <TextMessage>
        동일한 그룹 내의 하위 텍스트 중 첫번째 요소를 제외한 나머지는 둥근
        테두리를 가집니다.
      </TextMessage>
      <TextMessage>
        발신자는 프로필이 노출되고 배경 스타일도 다릅니다.
      </TextMessage>
    </MessageGroup>
  ),
  args: {
    from: 'ASSISTANT',
  },
}

const ContentCard = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid black;
`

export const Collection: StoryObj<typeof MessageGroup> = {
  render: (args) => (
    <MessageGroup {...args}>
      <CollectionMessage>
        <CollectionMessage.Item>
          <ContentCard>디바이스 너비에 맞춰서 스크롤됩니다.</ContentCard>
        </CollectionMessage.Item>
        <CollectionMessage.Item>
          <ContentCard>컨텐츠 2</ContentCard>
        </CollectionMessage.Item>
        <CollectionMessage.Item>
          <ContentCard>컨텐츠 3</ContentCard>
        </CollectionMessage.Item>
        <CollectionMessage.Item>
          <ContentCard>컨텐츠 4</ContentCard>
        </CollectionMessage.Item>
        <CollectionMessage.Item>
          <ContentCard>컨텐츠 5</ContentCard>
        </CollectionMessage.Item>
        <CollectionMessage.Item>
          <ContentCard>컨텐츠 6</ContentCard>
        </CollectionMessage.Item>
        <CollectionMessage.Item>
          <ContentCard>컨텐츠 7</ContentCard>
        </CollectionMessage.Item>
        <CollectionMessage.Item>
          <ContentCard>컨텐츠 8</ContentCard>
        </CollectionMessage.Item>
        <CollectionMessage.Item>
          <ContentCard>컨텐츠 9</ContentCard>
        </CollectionMessage.Item>
      </CollectionMessage>
    </MessageGroup>
  ),
  args: {
    from: 'ASSISTANT',
  },
}

export const Error: StoryObj<typeof ErrorMessage> = {
  render: () => (
    <MessageGroup from="ASSISTANT">
      <ErrorMessage>
        Unable to retrieve recommended content. Please try again in a moment.
      </ErrorMessage>
    </MessageGroup>
  ),
}
