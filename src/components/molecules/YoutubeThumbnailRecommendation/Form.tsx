import styled from "styled-components";
import YoutubeFileInput from "./Input";
import Pill from "../Button/Pill";

type FormProps = {
  isResultVisible: boolean;
  setIsResultVisible: React.Dispatch<React.SetStateAction<boolean>>;
  file: any;
  setFile: React.Dispatch<React.SetStateAction<any>>;
  preview: any;
  setPreview: React.Dispatch<React.SetStateAction<any>>;
};

export default function Form({
  isResultVisible,
  setIsResultVisible,
  file,
  setFile,
  preview,
  setPreview,
}: FormProps): JSX.Element {
  const initialize = (event) => {
    event.preventDefault();
    setFile("");
    setPreview("");
    setIsResultVisible(false);
  };

  const showResult = (event) => {
    event.preventDefault();
    setIsResultVisible(true);
  };

  let previewImage = null;
  if (file !== "") {
    previewImage = <Img src={preview} />;
  }

  return (
    <YoutubeFileForm>
      <YoutubeFileInput
        file={file}
        setFile={setFile}
        preview={preview}
        setPreview={setPreview}
      ></YoutubeFileInput>
      {previewImage}
      {isResultVisible ? (
        <Pill level={1} weight={500} onClick={initialize}>
          다시 입력하기
        </Pill>
      ) : (
        <Pill level={1} weight={500} onClick={showResult}>
          조회수 예측
        </Pill>
      )}
    </YoutubeFileForm>
  );
}

const YoutubeFileForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  max-height: 30rem;
  margin-bottom: 2rem;
`;
