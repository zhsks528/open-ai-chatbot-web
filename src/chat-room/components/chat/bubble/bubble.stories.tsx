import type { Meta, StoryObj } from '@storybook/react'

import { Bubble } from './bubble'
import { TextBubble } from './text-bubble'
import { SpinnerBubble } from './spinner-bubble'

const meta: Meta<typeof Bubble> = {
  component: Bubble,
}

export default meta

export const Spinner: StoryObj<typeof SpinnerBubble> = {
  render: () => <SpinnerBubble from="assistant">waiting...</SpinnerBubble>,
}

export const Text: StoryObj<typeof TextBubble> = {
  render: (args) => <TextBubble {...args} />,
  args: {
    from: 'user',
    children:
      '명동에 위치한 명동 교자 본점 가는 방법은 지하철 4호선 명동역 8번 출구에서 도보 2분, 명동 성당에서 도보 4분이 소요됩니다.',
  },
}

export const Typewriter: StoryObj<typeof TextBubble> = {
  render: (args) => <TextBubble {...args} />,
  args: {
    from: 'assistant',
    $typing: true,
    children:
      '명동에 위치한 명동 교자 본점 가는 방법은 지하철 4호선 명동역 8번 출구에서 도보 2분, 명동 성당에서 도보 4분이 소요됩니다.',
  },
}
