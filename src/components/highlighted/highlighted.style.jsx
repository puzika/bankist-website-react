import styled from "styled-components";

export const Highlighted = styled.span`
   position: relative;

   &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to top left, #39b385, #9be15d);
      z-index: -1;
      opacity: .7;
      scale: 1.1;
      transform: skew(-15deg);
   }
`