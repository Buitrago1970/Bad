import React, { useContext } from "react";
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
  Img5,
  Icon1,
  Icon,
} from "../Styles/StyledMusicSectionMiddle2";
import AppContext from "../context/AppContext";
import imagesxd from "../images/Liquid effect (1).png";

export default function MusicSectionMiddle() {
  const { state } = useContext(AppContext);
  const { song_covers, song_icons } = state;
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Icon1 src={song_icons[4].image} alt="0" />
          </StyledDiv1>
          <StyledDiv2>
            <Img1 src={song_covers[5].image} alt="1" />
          </StyledDiv2>
          <StyledDiv3>
            <Img2 src={song_covers[4].image} />
          </StyledDiv3>
          <StyledDiv4>❤</StyledDiv4>
          <StyledDiv5>
            <Img3 src={song_covers[2].image} alt="2" />
          </StyledDiv5>
          <StyledDiv6>
            <Icon src={song_icons[5].image} alt="3" />
          </StyledDiv6>
          <StyledDiv7>
            <Icon src={song_icons[6].image} alt="4" />
          </StyledDiv7>
          <StyledDiv8>
            <Img4 src={song_covers[0].image} alt="img" />
          </StyledDiv8>

          <StyledDiv10>
            <Img5 src={imagesxd} alt="img" />
          </StyledDiv10>
        </Music>
      </StyledContainerHome>
    </>
  );
}
