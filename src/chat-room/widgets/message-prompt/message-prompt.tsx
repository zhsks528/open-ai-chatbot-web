import styled from 'styled-components'
import { PromptForm } from './prompt-form'

const PromptContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4px;
  background-color: var(--color-brightGray);
  padding: 8px 12px;
  max-width: 768px;
  margin: 0 auto;
`

export function MessagePrompt() {
  return (
    <PromptContainer>
      <PromptForm />
    </PromptContainer>
  )
}
