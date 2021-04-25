import styled from "styled-components";
import Colors from "../atoms/Colors";
import Text from "../atoms/Text";

export default function GlobalNavigationBar(): JSX.Element {
  return (
    <>
      <StyledHeader>
        <Text color={Colors.WHITE} level={5} weight="bold">
          히츠하이크
        </Text>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${Colors.RED};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 10%;
`;
