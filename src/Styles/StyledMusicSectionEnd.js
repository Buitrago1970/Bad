import styled from "styled-components";

export const StyledContainerHome = styled.div`
  margin: 0 37px;
`;
// ------------------------
export const Music = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const StyledDiv1 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;
export const StyledDiv2 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
`;
export const StyledDiv3 = styled.div`
  grid-area: 3 / 5 / 4 / 6;
`;
export const StyledDiv4 = styled.div`
  grid-area: 2 / 5 / 3 / 6;
  text-shadow: -2px 2px 0px #ff99cc, -4px 0px 0px #64a5b7;
  font-size: 30px;
`;
export const StyledDiv5 = styled.div`
  grid-area: 4 / 2 / 5 / 3;
`;
export const StyledDiv6 = styled.div`
  grid-area: 4 / 1 / 5 / 2;
`;
export const StyledDiv7 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  text-shadow: 0 0 5px rgb(0 255 255), 0 0 10px #fff, 0 0 20px #0b554c,
    0 0 4px #0b554c, 0 0 40px #0b554c;
  -webkit-text-stroke-color: hsl(0deg 46% 96% / 72%);
  font-size: 50px;
`;
export const StyledDiv8 = styled.div`
  grid-area: 3 / 4 / 4 / 5;
`;
export const StyledDiv9 = styled.div`
  grid-area: 5 / 3 / 6 / 4;
`;
export const Img1 = styled.img`
  width: 100%;
  border-radius: 7px;
`;
export const Img2 = styled.img`
  width: 100%;
  border-radius: 7px;
`;
export const Img3 = styled.img`
  width: 100%;
  border-radius: 7px;
`;
export const Img4 = styled.img`
  width: 100%;
  border-radius: 7px;
`;
export const Icon = styled.img`
  width: 70%;
`;
