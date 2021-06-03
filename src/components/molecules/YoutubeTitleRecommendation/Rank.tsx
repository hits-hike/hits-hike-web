import styled from "styled-components";
import Colors from "@colors";
import Icon from "../../atoms/Icon/Rank";
import Text from "../../atoms/Text";

export default function Rank({ number }: { number: number }): JSX.Element {
  return (
    <Wrapper>
      <Icon
        fill={Colors.RED}
        style={{ width: "2.4rem", height: "3.8rem" }}
      ></Icon>
      <NumberWrapper>
        <Text level={1} weight="bold" color={Colors.WHITE}>
          {number}
        </Text>
      </NumberWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
`;
const NumberWrapper = styled.span`
  position: absolute;
  top: 0.1rem;
`;
