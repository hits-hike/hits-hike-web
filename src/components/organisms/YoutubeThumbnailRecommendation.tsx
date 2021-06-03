import { useState } from "react";
import styled from "styled-components";
import Colors from "../atoms/Colors";
import Text from "../atoms/Text";
import ArticleTitle from "../molecules/ArticleTitle";
import YoutubeFileForm from "../molecules/YoutubeThumbnailRecommendation/Form";
import RecommendationResult from "../molecules/YoutubeThumbnailRecommendation/Result";

export default function YoutubeThumbnailRecommendation(): JSX.Element {
  const [isResultVisible, setIsResultVisible] = useState<boolean>(false);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  return (
    <Wrapper>
      <ArticleTitle title="썸네일 추천"></ArticleTitle>
      <Text level={1}>
        썸네일 후보를 업로드하세요. AI를 활용해 업로드한 썸네일의 예상 조회수를
        알려드립니다.
      </Text>
      <ContentsWrapper>
        <YoutubeFileForm
          isResultVisible={isResultVisible}
          setIsResultVisible={setIsResultVisible}
          file={file}
          setFile={setFile}
          preview={preview}
          setPreview={setPreview}
        ></YoutubeFileForm>
        {isResultVisible && <RecommendationResult />}
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
