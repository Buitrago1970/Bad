import * as React from "react";
import {
  StyledContainerHome,
  StyledSectionMiddle,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  StyledDiv5,
  StyledDiv6,
  StyledDiv7,
  StyledImg,
  // StyledImg100pre,
  StyledAlbum,
} from "../Styles/styledSectionMiddle";

import conejo from "../images/icons/icons_svg/bad bunny logo.svg";
import oasis from "../images/oasis.jpg";
import x100pretext from "../images/icons/icons_svg/x100prelogo.svg";
import tenis from "../images/tenis-x9000l1.jpg";
export default function SectionMiddle() {
  return (
    <>
      <StyledContainerHome>
        <StyledSectionMiddle>
          <StyledDiv1>
            <StyledImg src={conejo} alt="conejo" />
          </StyledDiv1>
          <StyledDiv2>
            <StyledAlbum src={oasis} alt="oasis" />
          </StyledDiv2>
          <StyledDiv3>❤</StyledDiv3>
          <StyledDiv4>
            {/* <StyledImg100pre src={x100pretext} alt="x100pretext" /> */}
          </StyledDiv4>
          <StyledDiv5>
            <StyledImg src={tenis} alt="tenis" />
          </StyledDiv5>
          <StyledDiv6>
            <StyledImg src={tenis} alt="tenis" />
          </StyledDiv6>
          <StyledDiv7>
            <StyledImg src={tenis} alt="tenis" />
          </StyledDiv7>
        </StyledSectionMiddle>
      </StyledContainerHome>
    </>
  );
}
