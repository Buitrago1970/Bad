import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  StyledContainerHome,
  StyledSectionMiddle,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  StyledDiv5,
  StyledDiv6,
  StyledDiv7,
  Img100pre,
  StyledAlbum,
  Img,
} from "../Styles/styledSectionMiddle";

export default function SectionMiddle() {
  const { state } = useContext(AppContext);
  const { albums_cover, iconos_generales, shoes } = state;
  return (
    <>
      <StyledContainerHome>
        <StyledSectionMiddle>
          <StyledDiv1>
            <Img src={iconos_generales[0].image} alt="conejo" />
          </StyledDiv1>
          <StyledDiv2>
            <StyledAlbum src={albums_cover[4].image} alt="oasis" />
          </StyledDiv2>
          <StyledDiv3>❤🧡💛💚💙💜🤎🖤🤍💖💗</StyledDiv3>
          <StyledDiv4>
            <Img100pre src={iconos_generales[5].image} alt="x100pretext" />
          </StyledDiv4>
          <StyledDiv5>
            <Img src={shoes[2].image} alt="BlackShoes" />
          </StyledDiv5>
          <StyledDiv6>
            <Img src={shoes[1].image} alt="RoseShoes" />
          </StyledDiv6>
          <StyledDiv7>
            <Img src={shoes[0].image} alt="BrownShoes" />
          </StyledDiv7>
        </StyledSectionMiddle>
      </StyledContainerHome>
    </>
  );
}
