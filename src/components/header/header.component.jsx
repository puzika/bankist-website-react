import Navbar from "../navbar/navbar.component";
import HeaderTitle from "../header-title/header-title.component";
import * as S from './header.styles'

export default function Header() {
   return (
      <S.Header>
         <Navbar></Navbar>
         <HeaderTitle></HeaderTitle>
      </S.Header>
   )
}