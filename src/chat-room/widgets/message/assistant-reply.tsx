import {
  CollectionMessage,
  MarkdownMessage,
  MessageGroup,
} from '@/chat-room/components/chat'
import { CardMessage } from '@/chat-room/components/chat/message/card-message'

interface AssistantReplyProps {
  messages: {
    questionType: '교통안내'
    recommendReason: string
    content:
      | {
          // 대표 이미지
          image: string
          // 상품명
          tna_prod_nm: string
          // 리뷰 평점
          review_avg_score: number
          // 상품 가격
          sell_amt: number
          // 상품 ID
          tna_prod_cd: string
          // 리뷰
          review: string
        }[]
      | {
          text: string
        }[]
  }
}

export function AssistantReply({ messages }: AssistantReplyProps) {
  const { recommendReason, content } = messages || {}

  return (
    <>
      <MessageGroup from="assistant">
        {recommendReason ? (
          <MarkdownMessage>{recommendReason}</MarkdownMessage>
        ) : null}

        {(content || []).map((message, index) => {
          if (message.text) {
            return <MarkdownMessage key={index}>{message.text}</MarkdownMessage>
          }
        })}

        <CollectionMessage>
          {(content || []).map((message, index) => {
            if (!message.text) {
              return (
                <CollectionMessage.Item key={index}>
                  <CardMessage {...message} />
                </CollectionMessage.Item>
              )
            }
          })}
        </CollectionMessage>
      </MessageGroup>
    </>
  )
}
