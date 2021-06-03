import styled from "styled-components";
import Text from "../../atoms/Text";
import LineChart from "./LineChart";

export default function Result(): JSX.Element {
  // 결과 하드코딩함 (추후 백엔드와 연결 예정)
  return (
    <Wrapper>
      <LineChart />
      <Text level={1} weight={500}>
        AI를 활용해 조회수를 예측한 결과, 1개월 동안 1만 이상 3만 이하의
        조회수에 도달할 것으로 예측됩니다.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
