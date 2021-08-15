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
  Img1,
  Img2,
  Icon,
  Img4,
  Img5,
  Gif,
} from "../Styles/StyledMusicSectionMiddle";

import droga from "../images/maxresdefault (3).jpg";
import unaVez from "../images/maxresdefault (4).jpg";
import elMundoEsMio from "../images/maxresdefault (6).jpg";

import drogaIcon from "../images/icons/icons_svg/songs_icons/droga.svg";
import unaVezIcon from "../images/icons/icons_svg/songs_icons/Sin titulo-1.svg";
import elMundoEsMioIcon from "../images/icons/icons_svg/songs_icons/can-am2.svg";

import poster from "../images/icons/poster.jpg";
export default function MusicSectionMiddle() {
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Icon src={drogaIcon} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Img1 src={droga} alt="img" />
          </StyledDiv2>
          <StyledDiv3>
            <Img2 src={poster} />
          </StyledDiv3>
          <StyledDiv4>
            <Img4 src={unaVezIcon} alt="img" />
          </StyledDiv4>
          <StyledDiv5>
            <Gif src={unaVez} alt="img" />
          </StyledDiv5>
          {/* <StyledDiv6>
            <Img5 src={elMundoEsMio} alt="img" />
          </StyledDiv6>
          <StyledDiv7>
            <Gif src={elMundoEsMioIcon} alt="img" />
          </StyledDiv7> */}
        </Music>
      </StyledContainerHome>
    </>
  );
}
