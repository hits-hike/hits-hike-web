import styled from "styled-components";
import Colors from "../Colors";

export default styled.button`
  width: fit-content;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1);
  background-color: ${Colors.RED};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.WHITE};
  border: none;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
`;
