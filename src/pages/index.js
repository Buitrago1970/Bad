import React from "react";

import Home from "../components/Home";
import SectionMiddle from "../components/SectionMiddle";
import SectionCenter from "../components/SectionCenter";
import Music from "../components/Music";
import Footer from "../components/Footer";
import AppContext from "../context/AppContext";
import UseInitialState from "../hooks/useInitialState";
import { GlobalStyled } from "../Styles/styled";
import "../Styles/global.css";

export default function IndexPage() {
  const InitialState = UseInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <GlobalStyled />
      <Home />
      <SectionMiddle />
      <SectionCenter />
      {/* <Music /> */}
      {/* <Footer }/> */}
    </AppContext.Provider>
  );
}
