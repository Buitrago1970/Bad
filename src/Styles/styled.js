import styled, { createGlobalStyle } from "styled-components";
import { device } from "../../breakpoints";

export const StyledContainerHome = styled.div`
  padding-top: 90px;
  margin: 0 37px;
  @media ${device.sm} {
    margin: 0 20px;
  }
  @media ${device.xs} {
    margin: 0 10px;
  }
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
  @media ${device.sm} {
    padding-top: 0;
    margin: 0;
    width: 190%;
  }
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
  @media ${device.sm} {
    margin-top: 100px;
  }
`;
export const StyledDiv5 = styled.div`
  grid-area: 2 / 5 / 3 / 6;
`;
export const Img1 = styled.img`
  width: 90%;
  border-radius: 7px;
  box-shadow: 0 0 0.5rem #fefefe, inset 0 0 0.5rem #fff, 0 0 2rem #ffffff,
    inset 0 0 2rem #ffffff, 0 0 4rem #ffffff, inset 0 0 4rem #ffffff;
  @media ${device.sm} {
    width: 105%;
  }
  @media ${device.xs} {
    width: 100%;
  }
`;
export const Img2 = styled.img`
  width: 90%;
  border-radius: 7px;
  box-shadow: 0 0 0.5rem #6c7771, inset 0 0 0.5rem #fff, 0 0 2rem #fee902,
    inset 0 0 2rem #feea00, 0 0 4rem #ffeb00, inset 0 0 4rem #fdec00;
  @media ${device.sm} {
    width: 105%;
  }
  @media ${device.xs} {
    width: 150%;
    margin-left: -61px;
  }
`;
export const StyledImgeye = styled.img`
  width: 67px;
  @media ${device.sm} {
    width: 60px;
  }
  @media ${device.xs} {
    width: 35px;
  }
`;
export const StyledImghands = styled.img`
  width: 75px;
  @media ${device.xs} {
    width: 55px;
  }
`;
export const StyledImgheart = styled.img`
  width: 59px;
  @media ${device.sm} {
    width: 47px;
  }
  @media ${device.xs} {
    width: 30px;
  }
`;
export const GlobalStyled = createGlobalStyle`
    body{
        margin: 0;
        background: #001;
        color: #fff;
    }
`;
