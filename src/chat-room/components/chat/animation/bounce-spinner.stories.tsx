import type { Meta, StoryObj } from '@storybook/react'

import { BounceSpinner } from './bounce-spinner'

const meta: Meta<typeof BounceSpinner> = {
  component: BounceSpinner,
}

export default meta

export const Basic: StoryObj<typeof BounceSpinner> = {
  render: () => <BounceSpinner />,
}
