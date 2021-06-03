import styled from "styled-components";
import Colors from "../../atoms/Colors";

type InputProps = {
  id: number;
  value: null | string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Input(props: InputProps): JSX.Element {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <InputWrapper>
      <StyledLabel>제목 후보 {props.id}</StyledLabel>
      <StyledInput
        placeholder="제목 후보를 입력하세요"
        value={props.value}
        onChange={handleChange}
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

const StyledLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  margin-right: 1rem;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  width: 90%;
  height: 4rem;
  border: 0.2rem solid ${Colors.GRAY};
  box-sizing: border-box;
  padding: 0.5rem 1rem;
`;
