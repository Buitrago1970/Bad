import styled from "styled-components";

export const StyledContainerHome = styled.div`
  margin: 0 37px;
`;
export const StyledSectionCenter = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const StyledDiv1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
export const StyledDiv2 = styled.div`
  grid-area: 2 / 1 / 4 / 4;
`;
export const StyledDiv3 = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  width: 165px;
`;
export const StyledPoster = styled.img`
  width: 35%;
  box-shadow: 0 0 0.5rem #d41111, inset 0 0 0.5rem #fff, 0 0 2rem #330f0d,
    inset 0 0 2rem #330f0d, 0 0 4rem #330f0d, inset 0 0 4rem #330f0d;
`;
export const StyledImg = styled.img`
  width: 100px;
`;
export const StyledAlbum = styled.img`
  width: 150%;
  border-radius: 7px;
`;
