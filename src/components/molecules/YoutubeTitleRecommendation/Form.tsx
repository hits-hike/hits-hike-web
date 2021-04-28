import styled from "styled-components";
import YoutubeTitleInput from "./Input";
import Pill from "../Button/Pill";

type FormProps = {
  isResultVisible: boolean;
  setIsResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title1: string;
  title2: string;
  title3: string;
  setTitle1: React.Dispatch<React.SetStateAction<string>>;
  setTitle2: React.Dispatch<React.SetStateAction<string>>;
  setTitle3: React.Dispatch<React.SetStateAction<string>>;
};

export default function Form({
  isResultVisible,
  setIsResultVisible,
  title1,
  title2,
  title3,
  setTitle1,
  setTitle2,
  setTitle3,
}: FormProps): JSX.Element {
  const initialize = (event) => {
    event.preventDefault();
    setTitle1("");
    setTitle2("");
    setTitle3("");
    setIsResultVisible(false);
  };

  const showResult = (event) => {
    event.preventDefault();
    if (title1 === "" || title2 === "" || title3 === "") {
      alert("제목 후보를 모두 입력해주세요");
      return;
    }
    setIsResultVisible(true);
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
      {isResultVisible ? (
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
