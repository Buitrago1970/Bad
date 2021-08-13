import * as React from "react";
import {
  StyledHome,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  StyledDiv5,
  StyledAlbum,
  StyledContainerHome,
  StyledImghands,
  StyledImgheart,
  StyledImgeye,
} from "../Styles/styled";

import x100pre from "../images/x100pre.jpg";
import LQNIAS from "../images/Las Que No Iban A Salir.jpg";
import heart from "../images/icons/icons_svg/heart.svg";
import ojo from "../images/icons/icons_svg/ojo.svg";
import manos from "../images/icons/icons_svg/manos2.svg";

export default function Home() {
  return (
    <>
      <StyledContainerHome>
        <StyledHome>
          <StyledDiv1>
            <StyledAlbum src={x100pre} alt="x100pre" />
          </StyledDiv1>
          <StyledDiv2>
            <StyledImgeye src={ojo} alt="eye" />
          </StyledDiv2>
          <StyledDiv3>
            <StyledImgheart src={heart} alt="eye" />
          </StyledDiv3>
          <StyledDiv4>
            <StyledImghands src={manos} alt="eye" />
          </StyledDiv4>
          <StyledDiv5>
            <StyledAlbum src={LQNIAS} alt="x100pre" />
          </StyledDiv5>
        </StyledHome>
      </StyledContainerHome>
    </>
  );
}
