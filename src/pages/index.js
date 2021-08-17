import * as React from "react";

import Home from "../components/Home";
import SectionMiddle from "../components/SectionMiddle";
import SectionCenter from "../components/SectionCenter";
import Music from "../components/Music";
import Footer from "../components/Footer";
import { GlobalStyled } from "../Styles/styled";
import "../Styles/global.css";

const IndexPage = () => {
  // const bar = document.getElementById("progressBar");

  // const totalHeight = window.scrollHeight - window.innerHeight;

  // window.onscroll =
  //   ("load",
  //   function () {
  //     const progressHeight = (window.pageYOffset / totalHeight) * 100;
  //     bar.style.height = progressHeight + "%";
  //   });

  // window.onscroll = () => {
  //   const progressHeight = (window.pageYOffset / totalHeight) * 100;
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
      <Footer />
    </>
  );
};

export default IndexPage;
