import styled from "styled-components";
import { device } from "../../breakpoints";

export const StyledContainerHome = styled.div`
  margin: 0 37px;
  @media ${device.sm} {
    margin: 0 10px;
  }
`;
// ------------------------
export const Music = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media ${device.sm} {
    grid-row-gap: 5px;
  }
`;
export const StyledDiv1 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  @media ${device.sm} {
    width: 135%;
  }
`;
export const StyledDiv2 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  @media ${device.sm} {
    width: 135%;
    position: relative;
    right: 25%;
  }
`;
export const StyledDiv3 = styled.div`
  grid-area: 3 / 5 / 4 / 6;
  @media ${device.sm} {
    width: 135%;
    position: relative;
    right: 25%;
  }
`;
export const StyledDiv4 = styled.div`
  grid-area: 2 / 5 / 3 / 6;
  text-shadow: -2px 2px 0px #ff99cc, -4px 0px 0px #64a5b7;
  font-size: 30px;
  @media ${device.sm} {
    width: 135%;
    font-size: 15px;
    position: relative;
    right: 25%;
  }
`;
export const StyledDiv5 = styled.div`
  grid-area: 4 / 2 / 5 / 3;
  @media ${device.sm} {
    width: 130%;
    padding-left: 40px;
  }
`;
export const StyledDiv6 = styled.div`
  grid-area: 4 / 1 / 5 / 2;
  @media ${device.sm} {
    width: 135%;
  }
`;
export const StyledDiv7 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  text-shadow: 0 0 5px rgb(0 255 255), 0 0 10px #fff, 0 0 20px #0b554c,
    0 0 4px #0b554c, 0 0 40px #0b554c;
  -webkit-text-stroke-color: hsl(0deg 46% 96% / 72%);
  font-size: 50px;
  @media ${device.sm} {
    font-size: 15px;
  }
`;
export const StyledDiv8 = styled.div`
  grid-area: 3 / 4 / 4 / 5;
  @media ${device.sm} {
    width: 148%;
  }
`;
export const StyledDiv9 = styled.div`
  grid-area: 5 / 3 / 6 / 4;
  @media ${device.sm} {
    width: 140%;
  }
`;
export const Img1 = styled.img`
  width: 100%;
  border-radius: 7px;
  box-shadow: blue 0px 0px 0px 2px inset, rgb(0 0 17) 10px -10px 0px -3px,
    rgb(31 193 27) 10px -10px, rgb(0 0 17) 20px -20px 0px -3px,
    rgb(255 217 19) 20px -20px, rgb(0 0 17) 30px -30px 0px -3px,
    rgb(255 156 85) 30px -30px, rgb(0 0 17) 40px -40px 0px -3px,
    rgb(255 85 85) 40px -40px;
  @media ${device.sm} {
    box-shadow: blue 0px 0px 0px 2px inset, rgb(0 0 17) 5px -5px 0px -3px,
      rgb(31 193 27) 5px -5px, rgb(0 0 17) 10px -10px 0px -3px,
      rgb(255 217 19) 10px -10px, rgb(0 0 17) 15px -15px 0px -3px,
      rgb(255 156 85) 15px -15px, rgb(0 0 17) 20px -20px 0px -3px,
      rgb(255 85 85) 20px -20px;
  }
`;
export const Img2 = styled.img`
  width: 100%;
  border-radius: 7px;
  box-shadow: rgb(255 255 255) 0px -1px 7px 3px, rgb(4 4 4) 0px -2px 5px 4px,
    rgb(4 2 5) -3px -3px 0px, #030102 0px -2px 5px 7px,
    -4px 3px 6px 0px rgb(2 2 2);
  border: 2px outset #020202;
`;
export const Img3 = styled.img`
  width: 100%;
  border-radius: 7px;
  @media ${device.sm} {
    position: relative;
    right: 55%;
  }
`;
export const Img4 = styled.img`
  width: 100%;
  border-radius: 4px;
  border: 2px outset #ffffff;
  box-shadow: #fff 0px 0px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 5px 5px 12px 5px rgb(0 0 0 / 0%);
`;
export const Img5 = styled.img`
  width: 100%;

`;
export const Icon = styled.img`
  width: 70%;
`;
