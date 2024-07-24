import Logo from '../../assets/logo.png';
import SignUpButton from '../sign-button/sign-up-button.component';
import * as S from './navbar.styles';

export default function Navbar() {
   return (
      <S.Navbar>
         <S.NavbarImage src={Logo} />
         <S.NavbarList>
            <li>Features</li>
            <li>Operations</li>
            <li>Testimonials</li>
            <SignUpButton text={'Open account'}></SignUpButton>
         </S.NavbarList>
      </S.Navbar>
   )
}