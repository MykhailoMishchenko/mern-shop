import React from "react";
import styles from "./TopNav.module.scss";
import {ReactComponent as Phone} from "../../../assets/image/icon/phone-bold.svg";
import {ReactComponent as Location} from "../../../assets/image/icon/location-bold.svg";
import {ReactComponent as Clock} from "../../../assets/image/icon/clock-bold.svg";
import {ReactComponent as Facebook} from "../../../assets/image/icon/facebook.svg";
import {ReactComponent as Instagram} from "../../../assets/image/icon/instagram.svg";

const TopNav = () => {
  return (
    <nav className={styles.navigation}>
      <div className="container">
        <div className={styles.main}>
          <ul>
            <li>
              <Phone />
              <a href="tel:+380977993832">+380977993832</a>
            </li>
            <li>
              <Location />
              <address>Киев, Украина</address>
            </li>
            <li>
              <Clock />
              <p>Всю неделю 24/7</p>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/?stype=lo&jlou=AfeSXheG4JfygVj5BMB6USBRBrpxoKbQRKvUfzr1ueVdkBWVE1XeGqtUHdrNqsSjW3tF5J95A4ZJqVo8vb9jMPyiFuB425KuW5Pft_hCspEiQw&smuh=25535&lh=Ac9I8ggvXJm4tTzL6us"
                target="_blank" rel="noreferrer">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mmshchnk/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
