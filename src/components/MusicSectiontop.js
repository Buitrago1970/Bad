import React, { useContext } from "react";
import AppContext from "../context/AppContext";
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

import cienMillonesIcon from "../images/100millones.svg";

export default function MusicSectiontop() {
  const { state } = useContext(AppContext);
  const { song_covers, song_icons } = state;
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Img1 src={song_covers[11].image} alt="100 millones icon" />
          </StyledDiv1>
          <StyledDiv2>
            <Icon src={cienMillonesIcon} alt="100millonesicon" />
          </StyledDiv2>
          <StyledDiv3>
            <Icon src={song_icons[1].image} alt="yonaguni" />
          </StyledDiv3>
          <StyledDiv4>
            <Img3 src={song_covers[10].image} alt="1" />
          </StyledDiv4>
          <StyledDiv5>
            <Img4 src={song_covers[7].image} alt="0" />
          </StyledDiv5>
          <StyledDiv6>
            <Icon src={song_icons[0].image} alt="2" />
          </StyledDiv6>
        </Music>
      </StyledContainerHome>
    </>
  );
}
