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
  Img1,
  Img2,
  Img3,
  Img4,
  Icon,
} from "../Styles/StyledMusicSectionEnd";
import AppContext from "../context/AppContext";

export default function MusicSectionMiddle() {
  const { state } = useContext(AppContext);
  const { song_covers, song_icons } = state;
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Icon src={song_icons[1].image} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Img1 src={song_covers[7].image} alt="img" />
          </StyledDiv2>
          <StyledDiv3>
            <Icon src={song_icons[8].image} alt="img" />
          </StyledDiv3>
          <StyledDiv4>{"La Droga"}</StyledDiv4>
          <StyledDiv5>
            <Icon src={song_icons[9].image} alt="img" />
          </StyledDiv5>
          <StyledDiv6>
            <Img2 src={song_covers[3].image} alt="img" />
          </StyledDiv6>
          <StyledDiv7>{"Volando "}</StyledDiv7>
          <StyledDiv8>
            <Img3 src={song_covers[12].image} alt="img" />
          </StyledDiv8>
          <StyledDiv9>
            <Img4 src={song_covers[13].image} alt="img" />
          </StyledDiv9>
        </Music>
      </StyledContainerHome>
    </>
  );
}
