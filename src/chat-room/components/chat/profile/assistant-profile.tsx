import styled from "styled-components";
import { Text } from "@titicaca/core-elements";

import { AssistantProfileIcon } from "@/chat-room/components/inline-icons/assistant-profile-icon";

const ProfileContainer = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 9px;
`;

export function AssistantProfile() {
  return (
    <>
      <ProfileContainer>
        <AssistantProfileIcon />
      </ProfileContainer>
      <Text size={11} color="gray700" css={{ marginLeft: 41, marginBottom: 4 }}>
        TRIPLE Global
      </Text>
    </>
  );
}
