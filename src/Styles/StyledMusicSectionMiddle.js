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
  grid-area: 1 / 4 / 2 / 5;
`;
export const StyledDiv2 = styled.div`
  grid-area: 2 / 4 / 3 / 5;
`;
export const StyledDiv3 = styled.div`
  grid-area: 1 / 1 / 4 / 3;
`;
export const StyledDiv4 = styled.div`
  grid-area: 2 / 5 / 3 / 6;
  display: flex;
  justify-content: flex-end;
`;
export const StyledDiv5 = styled.div`
  grid-area: 1 / 4 / 3 / 5;
`;
export const StyledDiv6 = styled.div`
  grid-area: 3 / 4 / 4 / 5;
`;
export const StyledDiv7 = styled.div`
  grid-area: 3 / 5 / 4 / 6;
`;

export const Img1 = styled.img`
  width: 40%;
`;
export const Img2 = styled.img`
  width: 100%;
  box-shadow: 0 0 0.5rem #99aabb, inset 0 0 0.5rem #fff, 0 0 2rem #3969bd,
    inset 0 0 2rem #3969bd, 0 0 4rem #3969bd, inset 0 0 4rem #3969bd; ;
`;
export const Img3 = styled.img`
  width: 100%;
  border-radius: 7px;
  border-top-left-radius: 33px 163px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 93px 19px;
  border-bottom-right-radius: 120px 24px;
  border: solid 3px #ffffff;
  padding: 3px 3px;
  box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 5px 5px 12px 5px rgb(0 0 0 / 0%);
`;
export const Img4 = styled.img`
  width: 95%;
  border-radius: 7px;
  box-shadow: rgb(240 46 170 / 40%) 0px 5px, rgb(240 46 170 / 30%) 0px 10px,
    rgb(240 46 170 / 20%) 0px 15px, rgb(240 46 170 / 10%) 0px 20px,
    rgb(240 46 170 / 5%) 0px 25px;
`;

export const Icon = styled.img`
  width: 70%;
`;
export const Gif = styled.img`
  filter: drop-shadow(0 10px 10px rgba(25, 42, 456));
`;
