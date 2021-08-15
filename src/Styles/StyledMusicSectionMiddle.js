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
  grid-area: 1 / 1 / 2 / 2;
`;
export const StyledDiv2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;
export const StyledDiv3 = styled.div`
  grid-area: 1 / 1 / 4 / 3;
`;
export const StyledDiv4 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`;
export const StyledDiv5 = styled.div`
  grid-area: 1 / 4 / 3 / 5;
`;
export const StyledDiv6 = styled.div`
  grid-area: 1 / 5 / 3 / 6;
`;
export const StyledDiv7 = styled.div`
  grid-area: 2 / 5 / 4 / 6;
`;
export const Img1 = styled.img`
  width: 100%;
  border-radius: 7px;
`;
export const Img2 = styled.img`
  width: 100%;
  box-shadow: 0 0 0.5rem #99aabb, inset 0 0 0.5rem #fff, 0 0 2rem #3969bd,
    inset 0 0 2rem #3969bd, 0 0 4rem #3969bd, inset 0 0 4rem #3969bd; ;
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
export const Gif = styled.img`
  width: 95%;
  border-radius: 7px;
`;
