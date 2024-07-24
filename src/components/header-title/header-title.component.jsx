import * as S from './header-title.styles';
import Hero from '../../assets/hero.png'
import Highlighted from '../highlighted/highlighted.component';

export default function HeaderTitle() {
   return (
      <S.Title>
         <S.TitleContent>
            <S.TitleHeading>
               When <Highlighted text={'banking'}></Highlighted> meets <Highlighted text={'minimalist'}></Highlighted>
            </S.TitleHeading>
            <S.TitleSubHeading>
               A simpler banking experience for a simpler life.
            </S.TitleSubHeading>
            <S.TitleLink>
               Learn more &darr;
            </S.TitleLink>
         </S.TitleContent>
         <S.TitleImage src={Hero} />
      </S.Title>
   )
}