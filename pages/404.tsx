import { useEffect } from 'react'
import styled from 'styled-components'
import { captureException } from '@sentry/nextjs'
import { Navbar, Container, Text } from '@titicaca/core-elements'
import { useTripleClientActions } from '@titicaca/react-triple-client-interfaces'
import { useRouter } from 'next/router'

const Icon = styled.img`
  width: 74px;
  height: 74px;
`

const Button = styled.button`
  margin-top: 20px;
  padding: 11px 24px;
  font-size: 14px;
  font-weight: bold;
  color: #368fff;
  border-radius: 20px;
  border: solid 1px #368fff;
  background-color: transparent;
`

export default function Page404() {
  const { back } = useRouter()
  const { closeWindow } = useTripleClientActions()

  const handleButtonClick = closeWindow ?? back

  useEffect(() => {
    captureException(new Error(`404 - ${window.location.href}`))
  }, [])

  return (
    <Container
      css={{
        userSelect: 'none',
      }}
    >
      {closeWindow ? (
        <Navbar>
          <Navbar.Item floated="left" icon="back" onClick={closeWindow} />
        </Navbar>
      ) : null}

      <Container
        css={{
          margin: '223px 0 0',
          textAlign: 'center',
        }}
      >
        <Icon src="https://assets.triple.guide/images/img-empty-error@4x.png" />

        <Text bold size={18}>
          아이코!
        </Text>
        <Text
          center
          margin={{ top: 7 }}
          size="small"
          lineHeight={1.36}
          color="gray"
          alpha={0.5}
        >
          페이지를 찾을 수 없습니다.
        </Text>

        <Button onClick={handleButtonClick}>돌아가기</Button>
      </Container>
    </Container>
  )
}
