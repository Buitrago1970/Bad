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
} from "../Styles/StyledMusicSectionMiddle2";
import droga from "../images/maxresdefault (3).jpg";
import drogaIcon from "../images/icons/icons_svg/songs_icons/droga.svg";
import unaVez from "../images/maxresdefault (4).jpg";
import unaVezIcon from "../images/icons/icons_svg/songs_icons/una vez.svg";
import HaciendoQueMeAmas from "../images/maxresdefault (6).jpg";
import HaciendoQueMeAmasIcon from "../images/icons/icons_svg/songs_icons/Sin título-11.svg";
import x from "../images/icons/icons_svg/Sin título-2.svg";

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
            <Img1 src={x} />
          </StyledDiv3>
          <StyledDiv4>
            <Img4 src={unaVezIcon} alt="img" />
          </StyledDiv4>
          <StyledDiv5>
            <Gif src={unaVez} alt="img" />
          </StyledDiv5>
          <StyledDiv6>
            <Img5 src={HaciendoQueMeAmasIcon} alt="img" />
          </StyledDiv6>
          <StyledDiv7>
            <Gif src={HaciendoQueMeAmas} alt="img" />
          </StyledDiv7>
          <StyledDiv8>{"<3"}</StyledDiv8>
          <StyledDiv9>{"<3"}</StyledDiv9>
        </Music>
      </StyledContainerHome>
    </>
  );
}
