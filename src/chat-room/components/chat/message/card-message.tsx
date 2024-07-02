import { Container, FlexBox, Rating, Text } from '@titicaca/core-elements'
import Link from 'next/link'

interface CardMessageProps {
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
}

export function CardMessage({
  image,
  tna_prod_nm,
  review_avg_score,
  sell_amt,
  tna_prod_cd,
}: CardMessageProps) {
  console.log('sell_amt', sell_amt)

  return (
    <Container borderRadius={12} css={{ width: 250 }}>
      <Link
        href={`https://triple.guide/tna/products/${tna_prod_cd}`}
        target="_blank"
      >
        <img src={image} width="100%" height="150px" />

        <Container css={{ padding: '16px 14px', backgroundColor: 'white' }}>
          <Text size={20} bold maxLines={2}>
            {tna_prod_nm}
          </Text>

          <FlexBox flex css={{ marginTop: '10px' }}>
            <Rating score={review_avg_score} />
          </FlexBox>

          <Text
            size={16}
            bold
            margin={{ top: '8px' }}
          >{`${sell_amt.toLocaleString()}원`}</Text>
        </Container>
      </Link>
    </Container>
  )
}
