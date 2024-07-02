import {
  useRef,
  useState,
  type FormEventHandler,
  type ChangeEventHandler,
} from 'react'
import styled, { css } from 'styled-components'
import { Container } from '@titicaca/core-elements'

import { MessageIcon } from '@/chat-room/components/inline-icons/message-icon'

import { usePrompt } from './prompt-context'

const MIN_TEXTAREA_HEIGHT = 21
const MAX_TEXTAREA_HEIGHT = 105
const MAX_TEXT_LENGTH = 2000
const DEFAULT_INPUT_AREA_HEIGHT = 42

const InputForm = styled.form`
  min-height: ${DEFAULT_INPUT_AREA_HEIGHT}px;
  overflow: hidden;
  flex-grow: 1;
`

const InputContainer = styled(Container)`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: flex-end;
  border: 1px solid var(--palette-graypurple);
  border-radius: 20px;
  background-color: var(--color-white);
`

const TextArea = styled.textarea`
  flex-grow: 1;
  height: ${MIN_TEXTAREA_HEIGHT}px;
  margin: 10px 6px 11px 16px;
  padding: 0 6px;
  resize: none;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 15px;
  font-weight: 500;
  line-height: ${MIN_TEXTAREA_HEIGHT}px;
  color: var(--palette-gray100);

  ::placeholder {
    color: var(--color-gray300);
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

const SendButton = styled.button<{ disabled: boolean }>`
  flex-shrink: 0;
  width: 48px;
  height: 32px;
  margin: 5px 5px 5px 6px;
  border-radius: 17px;
  border: none;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: var(--color-white);
        `
      : css`
          cursor: pointer;
          background-color: var(--palette-purple100);
        `};
`

interface PromptFormProps {
  onSubmit?: (text: string) => void
}

export function PromptForm({ onSubmit }: PromptFormProps) {
  const { onMessageSubmit } = usePrompt()

  const [text, setText] = useState('')

  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault()

    onMessageSubmit(text)

    setText('')

    if (inputRef.current) {
      resetHeight(inputRef.current)
    }
  }

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (ev) => {
    const textarea = ev.target
    setText(textarea.value)
    resizeHeight(textarea)
  }

  const unSubmittable = !text.trim()

  return (
    <InputForm onSubmit={handleSubmit}>
      <InputContainer>
        <TextArea
          data-testid="prompt-textarea"
          ref={inputRef}
          value={text}
          placeholder="Send a message"
          maxLength={MAX_TEXT_LENGTH}
          onChange={handleChange}
        />
        <SendButton
          data-testid="prompt-send-button"
          type="submit"
          disabled={unSubmittable}
        >
          <MessageIcon disabled={unSubmittable} />
        </SendButton>
      </InputContainer>
    </InputForm>
  )
}

function resizeHeight(element: HTMLTextAreaElement) {
  element.style.height = '0px'

  const refinedHeight = Math.min(element.scrollHeight, MAX_TEXTAREA_HEIGHT)
  element.style.height = `${refinedHeight}px`
}

function resetHeight(element: HTMLTextAreaElement) {
  element.style.height = `${MIN_TEXTAREA_HEIGHT}px`
}
