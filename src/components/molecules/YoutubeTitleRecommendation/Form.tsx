import { useState } from "react";
import styled from "styled-components";
import YoutubeTitleInput from "./Input";
import Pill from "../Button/Pill";

type FormProps = {
  isResultVisible: boolean;
  setIsResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form(props: FormProps): JSX.Element {
  const [title1, setTitle1] = useState<string>(""); // 제목 후보1
  const [title2, setTitle2] = useState<string>(""); // 제목 후보2
  const [title3, setTitle3] = useState<string>(""); // 제목 후보3

  const initialize = (event) => {
    event.preventDefault();
    setTitle1("");
    setTitle2("");
    setTitle3("");
  };

  const showResult = (event) => {
    event.preventDefault();
    if (title1 === "" || title2 === "" || title3 === "") {
      alert("제목 후보를 모두 입력해주세요");
      return;
    }
    props.setIsResultVisible(!props.isResultVisible);
  };

  return (
    <YoutubeTitleForm>
      <YoutubeTitleInput
        id={1}
        value={title1}
        setValue={setTitle1}
      ></YoutubeTitleInput>
      <YoutubeTitleInput
        id={2}
        value={title2}
        setValue={setTitle2}
      ></YoutubeTitleInput>
      <YoutubeTitleInput
        id={3}
        value={title3}
        setValue={setTitle3}
      ></YoutubeTitleInput>
      {props.isResultVisible ? (
        <Pill level={1} weight={500} onClick={initialize}>
          다시 입력하기
        </Pill>
      ) : (
        <Pill level={1} weight={500} onClick={showResult}>
          추천 받기
        </Pill>
      )}
    </YoutubeTitleForm>
  );
}

const YoutubeTitleForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
