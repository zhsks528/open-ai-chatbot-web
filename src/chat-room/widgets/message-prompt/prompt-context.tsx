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
    questionType: '교통안내'
    recommendReason: string
    content: {
      image: string
      // 상품명
      tna_prod_nm: string
      // 리뷰 평점
      review_avg_score: number
      // 상품 가격
      sell_amt: number
      // 상품 ID
      tna_prod_cd: string
    }[]
  }
}

type Message = UserMessage | AssistantMessage

interface PromptMessageContextProps {
  isPending: boolean
  isLoading: boolean
  messages: Message[]
  onMessageChange: (message: Message) => void
  onMessageSubmit: (message: string) => void
  customMessages: Message[]
  onCustomMessageChange: (message: Message) => void
  onCustomMessageSubmit: (message: string) => void
}

const PromptMessageContext = createContext<PromptMessageContextProps | null>(
  null,
)

export function PromptMessageProvider({
  children,
}: PropsWithChildren<unknown>) {
  const [isLoading, setIsLoading] = useState(false)
  const { mutate, isPending } = useBookerInfoEditMutation()
  const [customMessages, setCustomMessages] = useState<Message[]>([])
  const [currentHotel, setCurrentHotel] = useState('')
  const [currentTransportation, setCurrentTransportation] = useState('')
  const [messages, setMessage] = useState<Message[]>([])
  const [selectedProductId, setSelectedProductId] = useState('')

  const handleMessageChange = useCallback((message: Message) => {
    setMessage((prev) => [...prev, message])
  }, [])

  const handleMessageSubmit = useCallback(
    (message: string) => {
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

      console.log('selectedProductId', selectedProductId)

      mutate(
        {
          message,
          selectedProductId,
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

            if (data.questionType === '교통안내' && data.content.length !== 0) {
              console.log('교통안내일 경우 테스트')
              console.log('data.content', data.content)
              return setSelectedProductId(data.content?.[0].tna_prod_cd)
            }
          },
          onError: (error) => {
            console.log('error', error)
          },
        },
      )
    },
    [selectedProductId],
  )

  // 공항 도착해서 선 질문하는 케이스
  const handleCustomMessageChange = useCallback((message: Message) => {
    setCustomMessages((prev) => [...prev, message])
  }, [])

  const handleCustomMessageSubmit = useCallback(
    (message: string) => {
      if (!currentHotel) {
        setIsLoading(true)

        setCustomMessages((prev) => [
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

        setTimeout(() => {
          setCurrentHotel(message)

          setCustomMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: [
                {
                  text: '어떤 이동 스타일을 원하세요? (예. 빠르게, 호텔 가까이, 지금 바로 이동)',
                },
              ],
            },
          ])
          setIsLoading(false)
        }, 2000)

        return
      }

      if (!currentTransportation) {
        setIsLoading(true)
        setCustomMessages((prev) => [
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

        setTimeout(() => {
          setCurrentTransportation(message)

          setCustomMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: [
                {
                  text: `${currentHotel}(와)과 가장 ${message} 이동하는 방법을 찾고 있어요.`,
                },
              ],
            },
          ])

          setIsLoading(false)

          mutate(
            {
              message: `${currentHotel}를 ${message} 가는 방법을 알려줘`,
              selectedProductId,
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

                if (
                  data.questionType === '교통안내' &&
                  data.content.length !== 0
                ) {
                  console.log('교통안내일 경우 테스트')
                  console.log('data.content', data.content)
                  return setSelectedProductId(data.content?.[0].tna_prod_cd)
                }
              },
              onError: (error) => {
                console.log('error', error)
              },
            },
          )
        }, 2000)

        return
      }

      console.log('after - currentTransportation', currentTransportation)
    },
    [currentHotel, currentTransportation],
  )

  const values = useMemo(
    () => ({
      isPending,
      isLoading,
      messages,
      onMessageChange: handleMessageChange,
      onMessageSubmit: handleMessageSubmit,
      customMessages,
      onCustomMessageChange: handleCustomMessageChange,
      onCustomMessageSubmit: handleCustomMessageSubmit,
    }),
    [
      isPending,
      messages,
      handleMessageChange,
      handleMessageSubmit,
      isLoading,
      customMessages,
      handleCustomMessageChange,
      handleCustomMessageSubmit,
    ],
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
