import { useState } from "react";
import styled from "styled-components";
import Colors from "../atoms/Colors";
import Text from "../atoms/Text";
import ArticleTitle from "../molecules/ArticleTitle";
import YoutubeTitleForm from "../molecules/YoutubeTitleRecommendation/Form";
import RecommendationResult from "../molecules/YoutubeTitleRecommendation/Result";

export default function YoutubeTitleRecommendation(): JSX.Element {
  const [isResultVisible, setIsResultVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <ArticleTitle title="제목 추천"></ArticleTitle>
      <Text level={1}>
        아래 입력창에 제목 후보를 입력하세요. AI를 활용해 입력한 제목 후보 중
        가장 조회수가 잘 나올 제목을 추천해드립니다.
      </Text>
      <ContentsWrapper>
        <YoutubeTitleForm
          isResultVisible={isResultVisible}
          setIsResultVisible={setIsResultVisible}
        ></YoutubeTitleForm>
        {isResultVisible && <RecommendationResult></RecommendationResult>}
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
  padding: 5rem 10%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const ContentsWrapper = styled.div`
  margin: 1rem 0;
  padding: 2rem;
  box-sizing: border-box;
  border: 0.3rem solid ${Colors.RED};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
