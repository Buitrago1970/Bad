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
  StyledDiv10,
  Img1,
  Img2,
  Img3,
  Img4,
  Icon1,
  Icon,
} from "../Styles/StyledMusicSectionMiddle2";

import CientoVeinte from "../images/maxresdefault (7).jpg";
import corazon from "../images/maxresdefault (9).jpg";
import yandel from "../images/maxresdefault (11).jpg";
import volvi from "../images/volvi.png";

import cientoVeinteIcon from "../images/icons/icons_svg/songs_icons/120icon.svg";
import yandelIcon from "../images/icons/icons_svg/songs_icons/llorablanco.svg";
import volviIcon from "../images/icons/icons_svg/songs_icons/volvi.svg";

export default function MusicSectionMiddle() {
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Icon1 src={cientoVeinteIcon} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Img1 src={CientoVeinte} alt="img" />
          </StyledDiv2>
          <StyledDiv3>
            <Img2 src={corazon} />
          </StyledDiv3>
          <StyledDiv4>❤</StyledDiv4>
          <StyledDiv5>
            <Img3 src={yandel} alt="img" />
          </StyledDiv5>
          <StyledDiv6>
            <Icon src={yandelIcon} alt="img" />
          </StyledDiv6>
          <StyledDiv7>
            <Icon src={volviIcon} alt="img" />
          </StyledDiv7>
          <StyledDiv8>
            <Img4 src={volvi} alt="img" />
          </StyledDiv8>
          <StyledDiv9></StyledDiv9>
          <StyledDiv10>{"BYE ME FUI"}</StyledDiv10>
        </Music>
      </StyledContainerHome>
    </>
  );
}
