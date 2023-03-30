import { Header, Main, Content } from "./styles";
import logoImg from '../assets/images/logo.png';
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Image src={logoImg} alt="Logo Todo-List" />
      </Header>
      <Main>
        <Content>
          {children}
        </Content>
      </Main>
    </>
  )
}