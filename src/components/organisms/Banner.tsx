import styled from "styled-components";
import Text from "../atoms/Text";
import Colors from "../atoms/Colors";

export default function Banner(): JSX.Element {
  return (
    <Wrapper>
      <BackgroundImage />
      <ContentsWrapper>
        <Text level={10} weight="bold">
          조회수가 잘 나오는 영상의 핵심, 바로 제목!
        </Text>
        <Text level={8} weight="bold">
          예상 조회수가 가장 높은 제목을 추천해주는 인공지능 솔루션, 히츠하이크
        </Text>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 30rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${Colors.GRAY};
  padding: 0 10%;
  box-sizing: border-box;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-color: ${Colors.GRAY};
  background-image: url("banner_background.jpg");
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
