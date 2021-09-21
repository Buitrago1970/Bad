import styled from "styled-components";
import { device } from "../../breakpoints";

export const StyledContainerHome = styled.div`
  padding-top: 150px;
  margin: 0 37px;
  @media ${device.sm} {
    margin: 0 20px;
  }
  @media ${device.xs} {
    margin: 0 10px;
    padding-top: 100px;
  }
`;
export const StyledSectionMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media ${device.sm} {
    grid-row-gap: 45px;
  }
`;

export const StyledDiv1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  @media ${device.sm} {
    margin-left: 70px;
  }
  @media ${device.xs} {
    margin: 0;
  }
`;
export const StyledDiv2 = styled.div`
  grid-area: 2 / 4 / 3 / 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${device.xs} {
    width: 190%;
  }
`;
export const StyledDiv3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  text-shadow: rgb(0 0 0) 0 0 65px, rgb(255 255 255) 0 0 7px,
    rgb(255 255 255) 0 0 60px, rgb(0 255 255) 0px 0px 70px,
    rgb(0 255 255) 0px 0px 20px, rgb(0 255 255) 0px 0px 20px,
    rgb(0 255 255) 0px 0px 20px, rgb(0 255 255) 0px 0px 20px;
  font-size: 25px;
  @media ${device.xs} {
    font-size: 15px;
  }
`;
export const StyledDiv4 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
export const StyledDiv5 = styled.div`
  grid-area: 3 / 5 / 4 / 6;
  @media ${device.xs} {
    grid-area: 3 / 5 / 4 / 6;
  }
`;
export const StyledDiv6 = styled.div`
  grid-area: 3 / 3 / 5 / 5;
  @media ${device.xs} {
    grid-area: 3 / 3 / 4 / 4;
  }
`;
export const StyledDiv7 = styled.div`
  grid-area: 3 / 1 / 5 / 3;
  @media ${device.xs} {
    grid-area: 3 / 1 / 4 / 2;
  }
`;
export const Img100pre = styled.img`
  width: 100px;
  @media ${device.xs} {
    width: 70px;
  }
`;
export const StyledAlbum = styled.img`
  width: 90%;
  border-radius: 3px;
  box-shadow: rgb(0 9 255) 0px 0px 10px 3px, rgb(6 255 0) 0px 0px 10px 6px,
    rgb(255 214 0) 0px 0px 10px 9px, rgb(255 106 0) 0px 0px 10px 12px,
    rgb(255 0 0) 0px 0px 10px 15px;
  @media ${device.sm} {
  }
  @media ${device.xs} {
    width: 100%;
    margin-right: 19px;
  }
`;
export const Img = styled.img`
  width: 180px;
  @media ${device.sm} {
    width: 100%;
  }
`;
