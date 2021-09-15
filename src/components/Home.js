import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  StyledHome,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  StyledDiv5,
  Img1,
  Img2,
  StyledContainerHome,
  StyledImghands,
  StyledImgheart,
  StyledImgeye,
} from "../Styles/styled";

export default function Home() {
  const { state } = useContext(AppContext);
  const { albums_cover } = state;
  const { iconos_generales } = state;
  return (
    <>
      <StyledContainerHome>
        <StyledHome>
          <StyledDiv1>
            <Img1 src={albums_cover[2].image} alt="x100pre" />
          </StyledDiv1>
          <StyledDiv2>
            <StyledImgeye src={iconos_generales[6].image} alt="eye" />
          </StyledDiv2>
          <StyledDiv3>
            <StyledImgheart src={iconos_generales[1].image} alt="eye" />
          </StyledDiv3>
          <StyledDiv4>
            <StyledImghands src={iconos_generales[7].image} alt="eye" />
          </StyledDiv4>
          <StyledDiv5>
            <Img2 src={albums_cover[3].image} alt="x100pre" />
          </StyledDiv5>
        </StyledHome>
      </StyledContainerHome>
    </>
  );
}
