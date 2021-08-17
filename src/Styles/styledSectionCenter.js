import styled from "styled-components";

export const StyledContainerHome = styled.div`
  margin: 0 37px;
`;
export const StyledSectionCenter = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Div = styled.div`
  grid-area: 4 / 3 / 5 / 5;
  font-size: 50px;
  color: #ffff;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
    0 -18px 40px #f00;
`;
export const StyledDiv0 = styled.div`
  grid-area: 4 / 4 / 5 / 5;
  display: flex;
  justify-content: center;
  align-items: baseline;
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
  width: 150px;
  border-radius: 2px;
  box-shadow: rgb(255 255 255) 0px -1px 4px 3px,
    rgb(251 247 228) 0px -2px 11px 9px, rgb(126 83 37) 0px -10px 20px,
    #b9880a 0px -18px 40px 0px, -4px 3px 20px 0px rgb(218 184 101);
`;
export const StyledAlbum = styled.img`
  box-shadow: rgb(255 255 255) 0px -1px 4px 3px,
    rgb(54 142 192) 0px -2px 11px 9px, rgb(20 117 168) 0px -10px 20px,
    #62acff 0px -18px 40px 0px, -4px 3px 20px 0px rgb(148 219 250);
  width: 150%;
  border-radius: 7px;
`;
export const StyledAlbum1 = styled.img`
  box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 5px 5px 12px 5px rgba(0, 0, 0, 0);
  width: 110%;
  border-radius: 7px;
`;
