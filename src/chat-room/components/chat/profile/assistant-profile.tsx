import styled from 'styled-components'
import { Text } from '@titicaca/core-elements'

const AssistantProfileIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/8579344f-145d-4d62-841b-d2cc1cd23e88.jpeg);
  background-size: 24px 24px;
`

const ProfileContainer = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 9px;
`

export function AssistantProfile() {
  return (
    <>
      <ProfileContainer>
        <AssistantProfileIcon />
      </ProfileContainer>
      <Text size={11} color="gray700" css={{ marginLeft: 41, marginBottom: 4 }}>
        맞다AI
      </Text>
    </>
  )
}
