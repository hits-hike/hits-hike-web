import styled from "styled-components";
import Text from "../../atoms/Text";

export default function Result(): JSX.Element {
  // 결과 하드코딩함 (추후 백엔드와 연결 예정)
  return (
    <Wrapper>
      <Text level={1} weight={500}>
        제목 후보 2가 제목 후보 1에 비해 42%, 제목 후보 3에 비해 12% 가량
        조회수가 더 높을 것으로 예측됩니다.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 2rem;
`;
