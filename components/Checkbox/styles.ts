import styled from "styled-components";

export const CheckBoxTaks = styled.div`
  display: 'flex';
  align-items: 'center';

  .CheckboxRoot {
    background-color: ${props => props.theme['gray-500']};
    width: 24px;
    height: 24px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme['blue-400']};
    cursor: pointer;

    &:focus {
      box-shadow: none;
    }

    &[data-state='checked'] {
      background-color: ${props => props.theme['purple-400']};
    }
  }

  .CheckboxIndicator {
    color: ${props => props.theme.white};
  }
`