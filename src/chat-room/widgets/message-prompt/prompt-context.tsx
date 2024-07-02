import { useBookerInfoEditMutation } from '@/chat-room/mutations/use-message-mutation'
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface UserMessage {
  role: 'user'
  content: {
    // 작성한 메시지
    text: string
  }[]
}

interface AssistantMessage {
  role: 'assistant'
  content: {
    image: string
    // 상품명
    tna_prod_nm: string
    // 리뷰 평점
    review_avg_score: number
    // 상품 가격
    sell_amt: number
  }[]
}

type Message = UserMessage | AssistantMessage

interface PromptMessageContextProps {
  isPending: boolean
  messages: Message[]
  onMessageChange: (message: Message) => void
  onMessageSubmit: (message: string) => void
}

const PromptMessageContext = createContext<PromptMessageContextProps | null>(
  null,
)

export function PromptMessageProvider({
  children,
}: PropsWithChildren<unknown>) {
  const { mutate, isPending } = useBookerInfoEditMutation()
  const [messages, setMessage] = useState<Message[]>([])

  const handleMessageChange = useCallback((message: Message) => {
    setMessage((prev) => [...prev, message])
  }, [])

  const handleMessageSubmit = useCallback((message: string) => {
    setMessage((prev) => [
      ...prev,
      {
        role: 'user',
        content: [
          {
            text: message,
          },
        ],
      },
    ])

    mutate(
      {
        message,
      },
      {
        onSuccess: (data) => {
          console.log('data', data)

          setMessage((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: data,
            },
          ])
        },
        onError: (error) => {
          console.log('error', error)
        },
      },
    )
  }, [])

  const values = useMemo(
    () => ({
      isPending,
      messages,
      onMessageChange: handleMessageChange,
      onMessageSubmit: handleMessageSubmit,
    }),
    [isPending, messages, handleMessageChange, handleMessageSubmit],
  )

  return (
    <PromptMessageContext.Provider value={values}>
      {children}
    </PromptMessageContext.Provider>
  )
}

export function usePrompt() {
  const context = useContext(PromptMessageContext)

  if (!context) {
    throw new Error('PromptProvider is not mount')
  }

  return context
}
