import * as React from "react";

import "../Styles/Footer.css";
import simpson from "../images/oie_15234345AypIX1Y7.gif";
import corazon from "../images/icons/colombiaCorazon.svg";
import instagram from "../images/icons/instagram.svg";
import mail from "../images/icons/mail.svg";
import jb from "../images/icons/neonjuanbui.svg";

export default function Work() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container-rights-reseved">
          <div className="whit-love">
            <p className="whit-love-p">Echo en </p>
            <img className="icon" src={corazon} alt="colmbian Heart" />
          </div>
        </div>
        <div className="email">
          <div className="container-img-f">
            <img src={simpson} alt="SimpsonGif" />
          </div>
          <div className="social-media">
            <img className="icon-media" src={instagram} alt="colmbian Heart" />
            <img className="icon-media" src={mail} alt="colmbian Heart" />
            <img className="icon-media" src={jb} alt="colmbian Heart" />
          </div>
        </div>
      </footer>
    </>
  );
}
