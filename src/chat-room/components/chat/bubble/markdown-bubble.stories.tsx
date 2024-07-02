import type { Meta, StoryObj } from '@storybook/react'

import { MarkdownBubble } from './markdown-bubble'

const meta: Meta<typeof MarkdownBubble> = {
  component: MarkdownBubble,
}

export default meta

const MARKDOWN = `
  Here are some quiet cafes in Seoul where you can study:  
  1. **Bukchon**: Many old Hanok (traditional Korean houses) have been converted into coffee shops in Bukchon. These coffee shops offer a tranquil atmosphere, perfect for studying.  
  2. **Seongsu**: Seongsu has many coffee shops that were converted from old abandoned factories. These coffee shops are quite large in scale and offer a unique and quiet environment for studying!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  
  3. **Garosu-gil, Apgujeong**: These affluent neighborhoods have upscale, trendy, and spacious coffee shops where you can study in peace.  
  4. **Donut Jungsu**: This cafe offers a bird's-eye view of Seoul, with Namsan Mountain as the focal point. One side of the wall is entirely made of glass, providing a completely open view, creating a serene environment for studying.  
  5. **[1in 1jan](https://www.starbucks.com/)**: This cafe offers a captivating Hanok view harmoniously set against the backdrop of Bukhansan Mountain. Despite its slight distance from downtown Seoul, the sweeping vista of Hanok blending with nature makes it a great place to study.  
  6. **Molto Italian Espresso Bar**: This cafe offers a view of Myeong-dong Cathedral while serving espresso. It feels like you've flown to Europe as you gaze out the terrace at Myeong-dong Catholic Cathedral and the surrounding red-brick buildings.  
  7. **Type Hangang River branch**: This cafe offers a charming perspective of Seoul, with the glistening Hangang River as its backdrop. From here, you can take in panoramic views of iconic Hangang River landmarks, including Hangang Bridge, Yeouido National Assembly, and the 63 Building.  
  https://n.news.naver.com/mnews/article/277/0005323795?sid=103
`

export const Basic: StoryObj<typeof MarkdownBubble> = {
  render: (args) => <MarkdownBubble {...args} />,
  args: {
    from: 'USER',
    children: MARKDOWN,
  },
}
