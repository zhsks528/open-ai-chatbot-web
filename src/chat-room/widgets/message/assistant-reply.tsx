import {
  CollectionMessage,
  MarkdownMessage,
  MessageGroup,
} from '@/chat-room/components/chat'
import { CardMessage } from '@/chat-room/components/chat/message/card-message'

interface AssistantReplyProps {
  messages: {
    // 대표 이미지
    image: string
    // 상품명
    tna_prod_nm: string
    // 리뷰 평점
    review_avg_score: number
    // 상품 가격
    sell_amt: number
  }[]
}

export function AssistantReply({ messages }: AssistantReplyProps) {
  return (
    <>
      <MessageGroup from="assistant">
        {/* <MarkdownMessage>'How much is a PS5?'</MarkdownMessage> */}

        <CollectionMessage>
          {messages.map((message, index) => (
            <CollectionMessage.Item key={index}>
              <CardMessage {...message} />
            </CollectionMessage.Item>
          ))}
        </CollectionMessage>
      </MessageGroup>
    </>
  )
}
