import styled from "styled-components";

export const Title = styled.div`
   display: grid;
   grid-template-columns: 3fr 2fr;
   align-content: center;
   justify-content: center;
   align-items: center;
   row-gap: 2rem;
   width: 80%;
   height: 100%;
   margin: 0 auto;
`;

export const TitleContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
`;

export const TitleHeading = styled.h1`
   font-size: 6rem;
`;

export const TitleSubHeading = styled.h3`
   font-size: 3rem;
   font-weight: 500;
`;

export const TitleImage = styled.img`
   width: 100%;
`;

export const TitleLink = styled.p`
   color: #5ec576;
   padding: .5rem;
   border-bottom: .1rem solid #5ec576;
   align-self: self-start;
   cursor: pointer;
`