/* eslint-disable no-underscore-dangle */
import styled from "styled-components";

type InputProps = {
  file: any;
  setFile: React.Dispatch<React.SetStateAction<any>>;
  preview: any;
  setPreview: React.Dispatch<React.SetStateAction<any>>;
};

export default function Input({
  file,
  setFile,
  preview,
  setPreview,
}: InputProps): JSX.Element {
  const handleFileOnChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const _file = event.target.files[0];
    reader.onloadend = () => {
      setFile(_file);
      setPreview(reader.result);
    };
    reader.readAsDataURL(_file);
  };

  return (
    <InputWrapper>
      <StyledInput
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        onChange={handleFileOnChange}
      ></StyledInput>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  width: 90%;
  height: 4rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
`;
