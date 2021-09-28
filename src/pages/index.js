import React, { useEffect, useState } from "react";

import Home from "../components/Home";
import SectionMiddle from "../components/SectionMiddle";
import SectionCenter from "../components/SectionCenter";
import Music from "../components/Music";
import Footer from "../components/Footer";
import AppContext from "../context/AppContext";
import UseInitialState from "../hooks/useInitialState";
import { GlobalStyled } from "../Styles/styled";
import PageLoanding from "./PageLoanding";
import "../Styles/global.css";
import gif from "../images/bb_thumb2.gif";

export default function IndexPage() {
  const InitialState = UseInitialState();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  if (loading == true) {
    return (
      <div className="container-loader">
        <img src={gif} alt="" />
      </div>
    );
  }
  return (
    <AppContext.Provider value={InitialState}>
      <GlobalStyled />
      <Home />
      <SectionMiddle />
      <SectionCenter />
      <Music />
      <Footer />
    </AppContext.Provider>
  );
}
