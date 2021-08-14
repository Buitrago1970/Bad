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
  Icon,
} from "../Styles/StyledMusic";
import cienMillones from "../images/maxresdefault (1).jpg";
import cienMillonesIcon from "../images/icons/icons_svg/songs_icons/100millones.svg";
import yonaguni from "../images/maxresdefault (2).jpg";
import yonaguniIcon from "../images/icons/icons_svg/songs_icons/sintitulo.svg";
import elMundoEsmio from "../images/maxresdefault (5).jpg";
import elMundoEsmioIcon from "../images/icons/icons_svg/songs_icons/Sin título-11.svg";
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
            <Img3 src={yonaguni} alt="img" />
          </StyledDiv3>
          <StyledDiv4>
            <Icon src={yonaguniIcon} alt="img" />
          </StyledDiv4>
          <StyledDiv5>
            <Img4 src={elMundoEsmio} alt="img" />
          </StyledDiv5>
          <StyledDiv6>
            <Icon src={elMundoEsmioIcon} alt="img" />
          </StyledDiv6>
        </Music>
      </StyledContainerHome>
    </>
  );
}
