import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  StyledContainerHome,
  StyledSectionCenter,
  Div,
  StyledDiv0,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledPoster,
  StyledImg,
  StyledAlbum,
  StyledAlbum1,
} from "../Styles/styledSectionCenter";
import poster from "../images/Bad Bunny discovered by Jaqui Flores on We Heart It.jpg";

export default function SectionCenter() {
  const { state } = useContext(AppContext);
  const { albums_cover, iconos_generales } = state;
  return (
    <>
      <StyledContainerHome>
        <StyledSectionCenter>
          <Div>{"<3"}✨</Div>
          <StyledDiv0>
            <StyledAlbum1 src={albums_cover[1].image} alt="yhlqmdlg" />
          </StyledDiv0>
          <StyledDiv1>
            <StyledImg src={iconos_generales[8].image} alt="gafas" />
          </StyledDiv1>
          <StyledDiv2>
            <StyledPoster src={poster} alt="oasis" />
          </StyledDiv2>
          <StyledDiv3>
            <StyledAlbum src={albums_cover[0].image} alt="eutdm" />
          </StyledDiv3>
        </StyledSectionCenter>
      </StyledContainerHome>
    </>
  );
}
