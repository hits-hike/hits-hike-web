import styled from "styled-components";
import Text from "../atoms/Text";
import Colors from "../atoms/Colors";

export default function Banner(): JSX.Element {
  return (
    <Wrapper>
      <BackgroundImage />
      <ContentsWrapper>
        <Text level={10} weight="bold">
          조회수 상승의 핵심! 제목과 썸네일!
        </Text>
        <Text level={8} weight="bold" color={Colors.BLACK}>
          더이상 고민하지 마시고 히츠하이크에게 맡겨주세요!
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
