import * as React from "react";

import Home from "../components/Home";
import SectionMiddle from "../components/SectionMiddle";
import SectionCenter from "../components/SectionCenter";
import Music from "../components/Music";
import { GlobalStyled } from "../Styles/styled";
import "../Styles/global.css";

const IndexPage = () => {
  // var bar = document.getElementById("progressBar");
  // debugger;

  // var totalHeight = window.scrollHeight - window.innerHeight;

  // window.onscroll =
  //   ("load",
  //   function () {
  //     var progressHeight = (window.pageYOffset / totalHeight) * 100;
  //     bar.style.height = progressHeight + "%";
  //   });

  // window.onscroll = () => {
  //   var progressHeight = (window.pageYOffset / totalHeight) * 100;
  //   bar.style.height = progressHeight + "%";
  // };

  return (
    <>
      {/* <div id="progressBar"></div>
      <div id="progressBarContainer"></div> */}
      <GlobalStyled />
      <Home />
      <SectionMiddle />
      <SectionCenter />
      <Music />
    </>
  );
};

export default IndexPage;
