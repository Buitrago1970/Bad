import * as React from "react";
import {
  StyledContainerHome,
  StyledSectionCenter,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledPoster,
  StyledImg,
  StyledAlbum,
} from "../Styles/styledSectionCenter";

import poster from "../images/Bad Bunny discovered by Jaqui Flores on We Heart It.jpg";
import yhlqmdlg from "../images/yhlqmdlg-scaled.jpg";
export default function SectionCenter() {
  return (
    <>
      <StyledContainerHome>
        <StyledSectionCenter>
          <StyledDiv1>
            <StyledImg src={poster} alt="gafas" />
          </StyledDiv1>
          <StyledDiv2>
            <StyledPoster src={poster} alt="oasis" />
          </StyledDiv2>
          <StyledDiv3>
            <StyledAlbum src={yhlqmdlg} alt="yhlqmdlg" />
          </StyledDiv3>
        </StyledSectionCenter>
      </StyledContainerHome>
    </>
  );
}
