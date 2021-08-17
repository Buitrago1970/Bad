import * as React from "react";

import "../Styles/Footer.css";

import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import simpson from "../images/oie_15234345AypIX1Y7.gif";
import corazon from "../images/icons/colombiaCorazon.svg";
import jb from "../images/icons/neonjuanbui.svg";

export default function Work() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container-rights-reseved">
          {/* <p className="footers">Desing and developed by Juuan Bui.</p>
          <p className="footers">All Rights reserved.</p> */}
          <p className="whit-love-p">Echo en </p>
          <img className="icon" src={corazon} alt="colmbian Heart" />
          <p className="whit-love-p">{"    by Juan Buitrago."} </p>
        </div>

        <div className="email">
          <div className="container-img-f">
            <img className="simpson" src={simpson} alt="SimpsonGif" />
          </div>

          <div className="social-media">
            <a
              className="footer-button instagram"
              href="https://www.instagram.com/el_guaso0n_bebe/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="footer-button instagram"
              href="https://www.juanbuui.com/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <img className="icon-media" src={jb} alt="colmbian Heart" />
            </a>
            <a
              className="footer-button github"
              href="https://github.com/Buitrago1970"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <AiOutlineGithub />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
