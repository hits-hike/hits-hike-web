import styled from "styled-components";
import Colors from "../../atoms/Colors";
import YoutubeTitleInput from "./Input";
import Pill from "../Button/Pill";

export default function Form(): JSX.Element {
  return (
    <YoutubeTitleForm>
      <YoutubeTitleInput id={1}></YoutubeTitleInput>
      <YoutubeTitleInput id={2}></YoutubeTitleInput>
      <YoutubeTitleInput id={3}></YoutubeTitleInput>
      <Pill level={1} weight={500}>
        추천 받기
      </Pill>
    </YoutubeTitleForm>
  );
}

const YoutubeTitleForm = styled.form`
  margin: 1rem 0;
  padding: 2rem;
  box-sizing: border-box;
  border: 0.3rem solid ${Colors.RED};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
