import styled from "styled-components";
import Text from "../atoms/Text";
import ArticleTitle from "../molecules/ArticleTitle";
import YoutubeTitleForm from "../molecules/YoutubeTitleRecommendation/Form";

export default function YoutubeTitleRecommendation(): JSX.Element {
  return (
    <Wrapper>
      <ArticleTitle title="제목 추천"></ArticleTitle>
      <Text level={1}>
        아래 입력창에 제목 후보를 입력하세요. AI를 활용해 입력한 제목 후보 중
        가장 조회수가 잘 나올 제목을 추천해드립니다.
      </Text>
      <YoutubeTitleForm></YoutubeTitleForm>
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
