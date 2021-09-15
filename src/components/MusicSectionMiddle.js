import React, { useContext } from "react";
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
  Img4,
  Gif,
} from "../Styles/StyledMusicSectionMiddle";
import elMundoEsMioIcon from "../images/icons/icons_svg/songs_icons/can-am2.svg";
import AppContext from "../context/AppContext";
export default function MusicSectionMiddle() {
  const { state } = useContext(AppContext);
  const { poster, song_icons, song_covers } = state;
  return (
    <>
      <StyledContainerHome>
        <Music>
          <StyledDiv1>
            <Gif src={song_icons[2].image} alt="img" />
          </StyledDiv1>
          <StyledDiv2>
            <Img4 src={song_covers[8].image} alt="img" />
          </StyledDiv2>
          <StyledDiv3>
            <Img2 src={poster[0].image} />
          </StyledDiv3>
          <StyledDiv4>
            <Img1 src={song_icons[3].image} />
          </StyledDiv4>
          <StyledDiv6>
            <Img3 src={song_covers[6].image} alt="img" />
          </StyledDiv6>
          <StyledDiv7>
            <Gif src={elMundoEsMioIcon} alt="img" />
          </StyledDiv7>
        </Music>
      </StyledContainerHome>
    </>
  );
}
