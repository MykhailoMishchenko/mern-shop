import React from 'react';
import styles from "./Footer.module.scss";
import {NavLink} from "react-router-dom";
import {ReactComponent as Location} from "../../assets/image/icon/location.svg";
import {ReactComponent as Phone} from "../../assets/image/icon/phone.svg";
import {ReactComponent as Clock} from "../../assets/image/icon/clock.svg";
import {ReactComponent as Mail} from "../../assets/image/icon/mail.svg";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={styles.main}>
                    <ul>
                        <li>
                            <h2>Категории</h2>
                        </li>
                        <li><NavLink activeClassName={styles.active} to="/for-women">Для девушек</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/for-men">Для мужчин</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/accessories">Аксессуары</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/sales">Распродажа</NavLink></li>
                    </ul>
                    <ul>
                        <li>
                            <h2>Информация</h2>
                        </li>
                        <li><NavLink activeClassName={styles.active} to="/about-us">Про нас</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/blog">Блог</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/contacts">Контакты</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/FAQs">Вопросы & Ответы</NavLink></li>
                    </ul>
                    <ul>
                        <li>
                            <h2>Полезные ссылки</h2>
                        </li>
                        <li><NavLink activeClassName={styles.active} to="/terms-conditions">Условия</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/returns-exchanges">Возврат & Обмен</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/shipping-and-delivery">Доставка</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to="/privacy-policy">Политика конфиденциальности</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h2>Контакты</h2>
                        </li>
                        <li><Location/>
                            <address>Киев. Украина</address>
                        </li>
                        <li><Phone/> <a href="tel:+380977993832">+380977993832</a></li>
                        <li><Clock/> <p>Всю неделю 24/7</p></li>
                        <li><Mail/> <a href="mailto:mishchenko.mykhailo@gmail.com">mishchenko.mykhailo@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
