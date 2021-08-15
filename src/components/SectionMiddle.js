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
  Img100pre,
  StyledAlbum,
  Img,
} from "../Styles/styledSectionMiddle";

import conejo from "../images/icons/icons_svg/bad bunny logo.svg";
import oasis from "../images/oasis.jpg";
import x100pretext from "../images/icons/icons_svg/x100prelogo.svg";

import BlackShoes from "../images/icons/badbunnyshoes.svg";
import BrownShoes from "../images/icons/brownshoes.svg";
import RoseShoes from "../images/icons/roseShoes.svg";

export default function SectionMiddle() {
  return (
    <>
      <StyledContainerHome>
        <StyledSectionMiddle>
          <StyledDiv1>
            <Img src={conejo} alt="conejo" />
          </StyledDiv1>
          <StyledDiv2>
            <StyledAlbum src={oasis} alt="oasis" />
          </StyledDiv2>
          <StyledDiv3>❤</StyledDiv3>
          <StyledDiv4>
            <Img100pre src={x100pretext} alt="x100pretext" />
          </StyledDiv4>
          <StyledDiv5>
            <Img src={BlackShoes} alt="BlackShoes" />
          </StyledDiv5>
          <StyledDiv6>
            <Img src={RoseShoes} alt="RoseShoes" />
          </StyledDiv6>
          <StyledDiv7>
            <Img src={BrownShoes} alt="BrownShoes" />
          </StyledDiv7>
        </StyledSectionMiddle>
      </StyledContainerHome>
    </>
  );
}
