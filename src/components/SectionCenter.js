import * as React from "react";
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
import gafas from "../images/Sin título.png";
import EUTDL from "../images/ab67616d0000b273005ee342f4eef2cc6e8436ab.jpg";
import poster from "../images/Bad Bunny discovered by Jaqui Flores on We Heart It.jpg";
import yhlqmdlg from "../images/yhlqmdlg-scaled.jpg";

export default function SectionCenter() {
  return (
    <>
      <StyledContainerHome>
        <StyledSectionCenter>
          <Div>{"<3"}✨</Div>
          <StyledDiv0>
            <StyledAlbum1 src={EUTDL} alt="yhlqmdlg" />
          </StyledDiv0>
          <StyledDiv1>
            <StyledImg src={gafas} alt="gafas" />
          </StyledDiv1>
          <StyledDiv2>
            <StyledPoster src={poster} alt="oasis" />
          </StyledDiv2>
          <StyledDiv3>
            __________ 🐱🐈🌈
            <StyledAlbum src={yhlqmdlg} alt="yhlqmdlg" />
          </StyledDiv3>
        </StyledSectionCenter>
      </StyledContainerHome>
    </>
  );
}
