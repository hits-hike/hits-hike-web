import styled from "styled-components";
import Colors from "../atoms/Colors";
import Text from "../atoms/Text";

export default function ArticleTitle({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <TitleWrapper>
      <BulletPoint></BulletPoint>
      <Text level={3} weight={500}>
        {title}
      </Text>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const BulletPoint = styled.span`
  width: 0.5rem;
  height: 2rem;
  margin-right: 1rem;
  background-color: ${Colors.RED};
`;
