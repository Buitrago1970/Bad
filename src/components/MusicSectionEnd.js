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
  Img2,
  Img3,
  Img4,
  Icon,
} from "../Styles/StyledMusicSectionEnd";

import vete from "../images/vetecover2019.jpg";
import comoAntes from "../images/hqdefault.jpg";
import museo from "../images/maxresdefault.jpg";
import serBichote from "../images/DvKRze4WkAAjOa6.jpg";
//mariposa
import veteIcon from "../images/icons/icons_svg/songs_icons/mariposarosa2.svg";
import drogaIcon from "../images/icons/icons_svg/songs_icons/veteicon.svg";
import museoIcon from "../images/icons/icons_svg/songs_icons/museo.svg";

export default function MusicSectionMiddle() {
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Icon src={drogaIcon} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Img1 src={vete} alt="img" />
          </StyledDiv2>
          <StyledDiv3>
            <Icon src={veteIcon} alt="img" />
          </StyledDiv3>
          <StyledDiv4>{"sub b0"}</StyledDiv4>
          <StyledDiv5>
            <Icon src={museoIcon} alt="img" />
          </StyledDiv5>
          <StyledDiv6>
            <Img2 src={museo} alt="img" />
          </StyledDiv6>
          <StyledDiv7>{"Volando "}</StyledDiv7>
          <StyledDiv8>
            <Img3 src={comoAntes} alt="img" />
          </StyledDiv8>
          <StyledDiv9>
            <Img4 src={serBichote} alt="img" />
          </StyledDiv9>
        </Music>
      </StyledContainerHome>
    </>
  );
}
