import styled from "styled-components";
import Colors from "../atoms/Colors";
import Text from "../atoms/Text";

export default function GlobalFooter(): JSX.Element {
  return (
    <StyledFooter>
      <Text color={Colors.BLACK} level={4} weight="bold">
        히츠하이크
      </Text>
      <Text level={0} weight={500} color={Colors.BLACK}>
        유튜브 조회수가 가장 잘 나올 수 있는 영상 제목 추천 시스템
      </Text>
      <Text level={0} color={Colors.BLACK}>
        © 2021 hits-hike. All rights reserved.
      </Text>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 15rem;
  background-color: ${Colors.GRAY};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 10%;
`;
