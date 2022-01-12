import React from 'react';
import styles from "./SecondBanner.module.scss";
import {NavLink} from "react-router-dom";
import secondBannerNewCollections from "../../../assets/image/stock/second-banner-new-collections.jpeg";
import secondBannerSales from "../../../assets/image/stock/second-banner-sales.jpeg";

const SecondBanner = () => {
    return (
        <section className={styles.salesAndNewCollections}>
            <div className={styles.newSeason}>
                <img src={secondBannerNewCollections} alt="Новая Коллекция"/>
                <NavLink to="/new-collection">
                    <h3>Новый сезон!</h3>
                    <p>Смотреть новую коллекцию</p>
                </NavLink>
            </div>
            <div className={styles.sale}>
                <img src={secondBannerSales} alt="Скидки"/>
                <NavLink to="/sales">
                    <h3>Скидки!</h3>
                    <p>Цены со скидкой до 75%</p>
                </NavLink>
            </div>
        </section>
    );
};

export default SecondBanner;
