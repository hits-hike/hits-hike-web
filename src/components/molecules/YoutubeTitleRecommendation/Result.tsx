import styled from "styled-components";
import Text from "../../atoms/Text";
import Rank from "./Rank";

type ResultProps = {
  title1: string;
  title2: string;
  title3: string;
};

export default function Result({
  title1,
  title2,
  title3,
}: ResultProps): JSX.Element {
  // 결과 하드코딩함 (추후 백엔드와 연결 예정)
  return (
    <Wrapper>
      <TitleWithRankWrapper>
        <Rank number={1}></Rank>
        <Text level={1}>{title2}</Text>
      </TitleWithRankWrapper>
      <TitleWithRankWrapper>
        <Rank number={2}></Rank>
        <Text level={1}>{title3}</Text>
      </TitleWithRankWrapper>
      <TitleWithRankWrapper>
        <Rank number={3}></Rank>
        <Text level={1}>{title1}</Text>
      </TitleWithRankWrapper>
      <Text level={1} weight={500}>
        AI를 활용해 조회수를 예측한 결과, 제목 후보 2가 제목 후보 1에 비해 42%,
        제목 후보 3에 비해 12% 가량 조회수가 더 높을 것으로 예측됩니다.
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

const TitleWithRankWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
