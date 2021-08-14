import styled from "styled-components";

export const StyledContainerHome = styled.div`
  padding-top: 150px;
  margin: 0 37px;
`;
export const StyledSectionMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const StyledDiv1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`;
export const StyledDiv2 = styled.div`
  grid-area: 2 / 4 / 3 / 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const StyledDiv3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  text-shadow: rgb(0 0 0) 0 0 65px, rgb(255 255 255) 0 0 7px,
    rgb(255 255 255) 0 0 60px, rgb(0 255 255) 0px 0px 70px,
    rgb(0 255 255) 0px 0px 20px, rgb(0 255 255) 0px 0px 20px,
    rgb(0 255 255) 0px 0px 20px, rgb(0 255 255) 0px 0px 20px;
  font-size: 25px;
`;
export const StyledDiv4 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
export const StyledDiv5 = styled.div`
  grid-area: 3 / 5 / 4 / 6;
`;
export const StyledDiv6 = styled.div`
  grid-area: 3 / 3 / 5 / 5;
`;
export const StyledDiv7 = styled.div`
  grid-area: 3 / 1 / 5 / 3;
`;
export const StyledImg100pre = styled.img`
  width: 100px;
`;
export const StyledAlbum = styled.img`
  width: 90%;
  border-radius: 7px;
`;
export const StyledImg = styled.img`
  width: 100px;
`;
