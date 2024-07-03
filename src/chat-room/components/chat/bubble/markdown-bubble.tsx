import { marked } from 'marked'
import styled from 'styled-components'

import { Bubble, type BubbleProp } from './bubble'

const Markdown = styled.div`
  line-height: 21px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  width: fit-content;
  display: inline;
  color: inherit;
  word-break: keep-all;
  overflow-wrap: break-word;

  p:not(:first-child) {
    margin-top: 10px;
  }

  ol,
  ul {
    margin: 10px 0;

    & > li {
      margin: 10px 0;
    }
  }

  h1,
  h2,
  h3 {
    margin: 10px 0;
  }

  a {
    text-decoration: underline;
    color: var(--palette-purple100);
  }
`

marked.use({
  breaks: true,
  gfm: true,
  renderer: {
    link(href, title, text) {
      return `<a target="_blank" rel="noreferrer noopener" href="${href}" title="${title}">${text}</a>`
    },
  },
})

interface MarkdownBubble extends BubbleProp {
  children: string
}

export function MarkdownBubble({ from, children }: MarkdownBubble) {
  const html = marked.parse(children)

  return (
    <Bubble from={from}>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
    </Bubble>
  )
}
