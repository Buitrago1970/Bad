import React from "react";
import {
  StyledContainerHome,
  Music,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  StyledDiv5,
  StyledDiv6,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Gif,
} from "../Styles/StyledMusic";

import x from "../images/Bad Bunny discovered by Jaqui Flores on We Heart It.jpg";
export default function MusicSectiontop() {
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Img1 src={x} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Img2 src={x} alt="img" />
          </StyledDiv2>
          <StyledDiv3>
            <Img3 src={x} alt="img" />
          </StyledDiv3>
          <StyledDiv4>
            <Img4 src={x} alt="img" />
          </StyledDiv4>
          <StyledDiv5>
            <Gif src={x} alt="img" />
          </StyledDiv5>
          <StyledDiv6>
            <Img5 src={x} alt="img" />
          </StyledDiv6>
        </Music>
      </StyledContainerHome>
    </>
  );
}
