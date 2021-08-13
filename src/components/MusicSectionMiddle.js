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
  StyledDiv7,
  StyledDiv8,
  StyledDiv9,
  Img1,
  Icon,
  Img3,
  Img4,
  Img5,
  Gif,
} from "../Styles/StyledMusicSectionMiddle";
import x from "../images/Bad Bunny discovered by Jaqui Flores on We Heart It.jpg";
export default function MusicSectionMiddle() {
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Icon src={x} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Img1 src={x} alt="img" />
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
          <StyledDiv7>
            <Gif src={x} alt="img" />
          </StyledDiv7>
          <StyledDiv8>
            <Img5 src={x} alt="img" />
          </StyledDiv8>
          <StyledDiv9>
            <Gif src={x} alt="img" />
          </StyledDiv9>
        </Music>
      </StyledContainerHome>
    </>
  );
}
