import styled from "styled-components";
import { device } from "../../breakpoints";

export const StyledContainerHome = styled.div`
  margin: 150px 37px;
  @media ${device.sm} {
    margin: 90px 15px;
  }
`;
export const Music = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 100px;
`;

export const StyledDiv1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
export const StyledDiv2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;
export const StyledDiv3 = styled.div`
  grid-area: 2 / 3 / 3 / 3;
`;
export const StyledDiv4 = styled.div`
  grid-area: 2 / 4 / 3 / 4;
`;
export const StyledDiv5 = styled.div`
  grid-area: 1 / 4 / 3 / 5;
`;
export const StyledDiv6 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
`;
export const Img1 = styled.img`
  width: 100%;
  border-radius: 7px;
  box-shadow: 0 0 0.5rem #0a0a0a, inset 0 0 0.5rem #fff, 0 0 1rem #545454,
    inset 0 0 1rem #545454, 0 0 1rem #545454, inset 2px 9px 4rem #c71c1c;
  @media ${device.sm} {
  }
`;
export const Img2 = styled.img`
  width: 80px;
`;
export const Img3 = styled.img`
  width: 100%;
  border-top-left-radius: 120px 24px;
  border-top-right-radius: 16px 101px;
  border-bottom-left-radius: 33px 133px;
  border-bottom-right-radius: 9px 127px;
  box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 6rem 5px #888f01,
    0 0 1rem 3px #ffffff, 0 0 1rem #888f01, -1px 0px 3rem 5px #888f01;
`;
export const Img4 = styled.img`
  width: 95%;
  border-radius: 7px;
  box-shadow: #3f51b5 0px 0px 0px 2px, #673ab7 0px 4px 6px -1px,
    rgb(255 255 255) 0px 1px 3px 8px inset;
  @media ${device.sm} {
  }
`;
export const Img5 = styled.img`
  width: 100%;
`;
export const Gif = styled.img`
  width: 120px;
`;
export const Icon = styled.img`
  width: 120px;
  padding-left: 64px;
  @media ${device.sm} {
    padding-left: 25px;
  }
`;
