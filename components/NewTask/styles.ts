import styled from "styled-components";

export const FormNewTask = styled.form`
  width: 100%;
  height: 54px;
  display: grid;
  grid-template-columns: 1fr 90px;
  gap: 8px;
  margin-top: -29px;

  input {
    padding-left: 20px;
    border-radius: 8px;
    background-color: ${props => props.theme['gray-500']};
    border: 1px solid ${props => props.theme['gray-700']};
    color: ${props => props.theme.white};

    &::placeholder {
      color: ${props => props.theme['gray-300']};
    }
  }

  button {
    border-radius: 8px;
    border: none;
    background-color: ${props => props.theme['blue-400']};
    color: ${props => props.theme.white};
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
`