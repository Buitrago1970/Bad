import styled from "styled-components";

export const StyledContainerHome = styled.div`
  margin: 0 37px;
`;
// ------------------------
export const Music = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const StyledDiv1 = styled.div`
  grid-area: 1 / 3 / 1 / 4;
`;
export const StyledDiv2 = styled.div`
  grid-area: 1 / 1 / 1 / 2;
`;
export const StyledDiv3 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
export const StyledDiv4 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  display: flex;
  justify-content: center;
  text-shadow: rgb(0 0 0) 0 0 65px, rgb(255 255 255) 0 0 7px,
    rgb(255 255 255) 0 0 60px, #ffffff 0px 0px 70px, #ffffff 0px 0px 20px,
    #000000 0px 0px 20px, #ffffff 0px 0px 20px, #ffffff 0px 0px 20px;
`;
export const StyledDiv5 = styled.div`
  grid-area: 3 / 4 / 5 / 5;
`;
export const StyledDiv6 = styled.div`
  grid-area: 3 / 5 / 5 / 6;
`;
export const StyledDiv7 = styled.div`
  grid-area: 3 / 2 / 5 / 3;
`;
export const StyledDiv8 = styled.div`
  grid-area: 3 / 1 / 5 / 2;
`;
export const StyledDiv9 = styled.div`
  grid-area: 2 / 5 / 3 / 6;
`;
export const StyledDiv10 = styled.div`
  grid-area: 2 / 5 / 4 / 7;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 4px #550b3c,
    0 0 40px #550b3c;
  -webkit-text-stroke-color: hsla(0, 0%, 100%, 0.7215686274509804);

  font-size: 40px;
`;

export const Img1 = styled.img`
  width: 120%;
  border-radius: 5px;
  box-shadow: 0 0 0.5rem #85d2ef, -5px -5px 10px 3px #4c006c,
    5px 5px 10px 4px #b9004e;
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
export const Icon1 = styled.img`
  width: 120%;
`;
export const Icon = styled.img`
  width: 70%;
`;
