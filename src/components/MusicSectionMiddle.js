import React from "react";
import {
  StyledContainerHome,
  Music,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  StyledDiv6,
  StyledDiv7,
  Img1,
  Img2,
  Img3,
  Gif,
} from "../Styles/StyledMusicSectionMiddle";

import droga from "../images/maxresdefault (3).jpg";
import unaVez from "../images/maxresdefault (4).jpg";
import elMundoEsMio from "../images/maxresdefault (6).jpg";

import drogaIcon from "../images/icons/icons_svg/songs_icons/droga.svg";
import unaVezIcon from "../images/icons/icons_svg/songs_icons/angeles.svg";
import elMundoEsMioIcon from "../images/icons/icons_svg/songs_icons/can-am2.svg";

import poster from "../images/icons/poster.jpg";
export default function MusicSectionMiddle() {
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Gif src={unaVezIcon} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Gif src={unaVez} alt="img" />
          </StyledDiv2>
          <StyledDiv3>
            <Img2 src={poster} />
          </StyledDiv3>
          <StyledDiv4>
            <Img1 src={drogaIcon} />
          </StyledDiv4>
          <StyledDiv6>
            <Img3 src={elMundoEsMio} alt="img" />
          </StyledDiv6>
          <StyledDiv7>
            <Gif src={elMundoEsMioIcon} alt="img" />
          </StyledDiv7>
        </Music>
      </StyledContainerHome>
    </>
  );
}
