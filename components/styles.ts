import styled from "styled-components";

export const Header = styled.header`
  background-color: ${props => props.theme['gray-700']};
  height: 200px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`
export const Main = styled.main`
  display: flex;
  justify-content: center;
`  
export const Content = styled.div`
  width: 100%;
  max-width: 736px;
`