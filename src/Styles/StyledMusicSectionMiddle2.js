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
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const StyledDiv1 = styled.div`
  grid-area: 1 / 3 / 1 / 4;
  filter: drop-shadow(0px 3px 1px #ec60ff);
  @media ${device.sm} {
  }
`;
export const StyledDiv2 = styled.div`
  grid-area: 1 / 1 / 1 / 2;
  @media ${device.sm} {
    width: 165%;
  }
`;
export const StyledDiv3 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  @media ${device.sm} {
    grid-area: 2 / 2 / 3 / 3;
    width: 148%;
  }
`;
export const StyledDiv4 = styled.div`
  filter: drop-shadow(0px -2px 1px #ff5b39);
  grid-area: 2 / 3 / 3 / 4;
  display: flex;
  justify-content: center;
  text-shadow: rgb(0 0 0) 0 0 65px, rgb(255 255 255) 0 0 7px,
    rgb(255 255 255) 0 0 60px, #ffffff 0px 0px 70px, #ffffff 0px 0px 20px,
    #000000 0px 0px 20px, #ffffff 0px 0px 20px, #ffffff 0px 0px 20px;
  @media ${device.sm} {
    grid-area: 2 / 4 / 3 / 4;
  }
`;
export const StyledDiv5 = styled.div`
  grid-area: 3 / 4 / 5 / 5;
  @media ${device.sm} {
    width: 154%;
    grid-area: 3 / 3 / 5 / 4;
  }
`;
export const StyledDiv6 = styled.div`
  filter: drop-shadow(0px 3px 1px #f0f);
  grid-area: 3 / 5 / 5 / 6;
  @media ${device.sm} {
    grid-area: 3 / 5 / 5 / 6;
  }
`;
export const StyledDiv7 = styled.div`
  filter: drop-shadow(0px -2px 1px #ff5b39);

  grid-area: 3 / 2 / 5 / 3;
  @media ${device.sm} {
  }
`;
export const StyledDiv8 = styled.div`
  filter: drop-shadow(0px 3px 1px #abf5ff);
  grid-area: 3 / 1 / 5 / 2;
  @media ${device.sm} {
    width: 110%;
  }
`;
export const StyledDiv9 = styled.div`
  grid-area: 2 / 5 / 3 / 6;
  @media ${device.sm} {
  }
`;
export const StyledDiv10 = styled.div`
  grid-area: 2 / 5 / 4 / 7;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 4px #550b3c,
    0 0 40px #550b3c;
  -webkit-text-stroke-color: hsla(0, 0%, 100%, 0.7215686274509804);
  font-size: 40px;
  @media ${device.sm} {
    font-size: 14px;
  }
`;

export const Img1 = styled.img`
  width: 120%;
  border-radius: 5px;
  box-shadow: 0 0 0.5rem #85d2ef, -5px -5px 10px 3px #4c006c,
    5px 5px 10px 4px #b9004e;
  @media ${device.sm} {
  }
`;
export const Img2 = styled.img`
  width: 100%;
  border-radius: 7px;
  filter: blur(1px);
  box-shadow: #ffffff 0px 0px 20px 2px, #ffffff 0px 0px 20px 4px,
    rgb(255 255 255) 0px 1px 11px 20px inset;
  @media ${device.sm} {
    filter: blur(0px);
  }
`;
export const Img3 = styled.img`
  width: 100%;
  border-radius: 7px;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
`;
export const Img4 = styled.img`
  width: 100%;
  border-radius: 7px;
  box-shadow: rgb(255 255 255 / 69%) 0px -23px 25px 0px inset,
    rgb(255 255 255 / 76%) 0px -36px 30px 0px inset,
    rgb(255 255 255 / 91%) 0px -79px 40px 0px inset,
    rgb(255 255 255 / 88%) 0px 2px 1px, rgb(255 255 255 / 84%) 0px 4px 2px,
    rgb(255 255 255 / 72%) 0px 8px 4px, rgb(255 255 255 / 9%) 0px 16px 8px,
    rgb(255 255 255 / 9%) 0px 32px 16px;
`;
export const Img5 = styled.img`
  width: 100%;
`;
export const Icon1 = styled.img`
  width: 120%;
  @media ${device.sm} {
    width: 165%;
    padding-left: 15px;
  }
`;
export const Icon = styled.img`
  width: 70%;
  @media ${device.sm} {
    width: 110%;
  }
`;
