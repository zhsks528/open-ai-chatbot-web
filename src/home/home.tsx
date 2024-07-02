import { Button, Container, FlexBox, Text } from '@titicaca/core-elements'
import Link from 'next/link'
import styled from 'styled-components'

const Divider1 = styled.hr`
  display: block;
  height: 2px;
  border-width: 0;
  background: black;
  margin: 0;
  opacity: 0.03;
  margin: 18px 0;
`

const Divider2 = styled.hr`
  display: block;
  height: 10px;
  border-width: 0;
  background: var(--color-gray100);
  margin: 0;
`

const Thumbnail = styled.img`
  width: 100%;
  height: 375px;
`

const MENUS = ['가이드', '항공', '숙소', '관광', '맛집', '투어티켓']

export function Home() {
  return (
    <Container>
      <Container backgroundColor="mint" css={{ padding: '28px 20px' }}>
        <Text size={15} bold color="white">
          오사카, 아이와 배우자와 함꼐
        </Text>
        <Text size={28} bold color="white" css={{ marginTop: '8px' }}>
          오늘은 여행 1일차
        </Text>

        <FlexBox flex alignItems="center" gap="12px" css={{ marginTop: 16 }}>
          <Button css={{ background: '#28BCB2' }}>
            <Text size={13} bold color="white">
              2024.06.22 - 6.27
            </Text>
          </Button>
          <Text size={14} bold color="white600">
            편집
          </Text>
        </FlexBox>

        <Divider1 />

        <FlexBox
          flex
          alignItems="center"
          justifyContent="space-between"
          gap="22px"
        >
          {MENUS.map((menu) => (
            <Text size={15} bold color="white">
              {menu}
            </Text>
          ))}
        </FlexBox>
      </Container>

      <Divider2 />

      <Link href="/">
        <Text
          size={15}
          bold
          color="gray"
          inlineBlock
          padding={{ top: 20, left: 20, right: 20, bottom: 20 }}
        >
          여행지에서 이동할 때 맞다AI로 들어와 🤖
        </Text>
      </Link>

      <Thumbnail src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/72ad4cc2-6dd3-4294-bf2d-7ea3344f627e.jpeg" />

      <Container css={{ padding: 20 }}>
        <Text size={20} bold lineHeight="26px" maxLines={2}>
          쉐라톤 그랜드 마카오쉐라톤 그랜드 마카오쉐라톤그랜드 마카오쉐라 최대
          두줄까지...
        </Text>
        <Text
          size={14}
          lineHeight="26px"
          maxLines={2}
          color="gray700"
          css={{ marginTop: '4px' }}
        >
          쉐라톤 그랜드 마카오쉐라톤 그랜드 마카오쉐라톤그랜드 마카오쉐라 최대
          두줄까지...
        </Text>

        <Text
          size={13}
          lineHeight="26px"
          color="gray500"
          css={{ marginTop: '9px' }}
        >
          5성급 · 마카오 · 678개의 리뷰
        </Text>
        <FlexBox flex alignItems="center" gap="4px">
          <Text
            size={18}
            lineHeight="26px"
            css={{ marginTop: '9px', color: '#FD2E69' }}
          >
            30%
          </Text>
          <Text size={18} lineHeight="26px" css={{ marginTop: '9px' }}>
            128,500원
          </Text>
          <Text
            size={13}
            lineHeight="26px"
            color="gray300"
            css={{ marginTop: '9px', textDecoration: 'line-through' }}
          >
            142,000원
          </Text>
        </FlexBox>
      </Container>

      <Thumbnail src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/f6579cf6-59e1-44ad-82b6-87cb277c410c.jpeg" />

      <Container css={{ padding: 20 }}>
        <Text size={20} bold lineHeight="26px" maxLines={2}>
          쉐라톤 그랜드 마카오쉐라톤 그랜드 마카오쉐라톤그랜드 마카오쉐라 최대
          두줄까지...
        </Text>
        <Text
          size={14}
          lineHeight="26px"
          maxLines={2}
          color="gray700"
          css={{ marginTop: '4px' }}
        >
          누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다.
          국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원 과반수의 출석과
          출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는 부결된 것으로
          본다.
        </Text>

        <Text
          size={13}
          lineHeight="26px"
          color="gray500"
          css={{ marginTop: '9px' }}
        >
          4성급 · 도쿄 · 423개의 리뷰
        </Text>
        <FlexBox flex alignItems="center" gap="4px">
          <Text
            size={18}
            lineHeight="26px"
            css={{ marginTop: '9px', color: '#FD2E69' }}
          >
            30%
          </Text>
          <Text size={18} lineHeight="26px" css={{ marginTop: '9px' }}>
            128,500원
          </Text>
          <Text
            size={13}
            lineHeight="26px"
            color="gray300"
            css={{ marginTop: '9px', textDecoration: 'line-through' }}
          >
            142,000원
          </Text>
        </FlexBox>
      </Container>
    </Container>
  )
}
