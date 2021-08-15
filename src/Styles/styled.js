import styled, { createGlobalStyle } from "styled-components";

export const StyledContainerHome = styled.div`
  padding-top: 90px;
  margin: 0 37px;
`;
export const StyledHome = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  text-align: center;
  grid-row-gap: 0px;
`;
export const StyledDiv1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  max-width: 300px;
`;
export const StyledDiv2 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
`;
export const StyledDiv3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;
export const StyledDiv4 = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  margin-top: 120px;
`;
export const StyledDiv5 = styled.div`
  grid-area: 2 / 5 / 3 / 6;
`;
export const StyledAlbum = styled.img`
  width: 90%;
  border-radius: 7px;
`;
export const StyledImgeye = styled.img`
  width: 67px;
`;
export const StyledImghands = styled.img`
  width: 75px;
`;
export const StyledImgheart = styled.img`
  width: 59px;
`;
export const GlobalStyled = createGlobalStyle`
    body{
        margin: 0;
        background: #125;
        color: #fff;
    }
`;
