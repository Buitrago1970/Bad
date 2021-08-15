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
  Img3,
  Img4,
  Icon,
} from "../Styles/StyledMusic";

import cienMillones from "../images/maxresdefault (1).jpg";
import yonaguni from "../images/maxresdefault (2).jpg";
import haciendoQueMeAmas from "../images/maxresdefault (5).jpg";

import cienMillonesIcon from "../images/icons/icons_svg/songs_icons/100millones.svg";
import yonaguniIcon from "../images/icons/icons_svg/songs_icons/sintitulo.svg";
import haciendoQueMeAmasIcon from "../images/icons/icons_svg/songs_icons/haciendo que me amas.svg";
export default function MusicSectiontop() {
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Img1 src={cienMillones} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Icon src={cienMillonesIcon} alt="100millonesicon" />
          </StyledDiv2>
          <StyledDiv3>
            <Icon src={yonaguniIcon} alt="img" />
          </StyledDiv3>
          <StyledDiv4>
            <Img3 src={yonaguni} alt="img" />
          </StyledDiv4>
          <StyledDiv5>
            <Img4 src={haciendoQueMeAmas} alt="img" />
          </StyledDiv5>
          <StyledDiv6>
            <Icon src={haciendoQueMeAmasIcon} alt="img" />
          </StyledDiv6>
        </Music>
      </StyledContainerHome>
    </>
  );
}
