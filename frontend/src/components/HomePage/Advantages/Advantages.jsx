import React from 'react';
import styles from "./Adavantages.module.scss";
import {ReactComponent as Truck} from "../../../assets/image/icon/truck.svg";
import {ReactComponent as Refresh} from "../../../assets/image/icon/refresh.svg";
import {ReactComponent as Support} from "../../../assets/image/icon/support.svg";

const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.advantage}>
                        <Truck className={styles.icon}/>
                        <div className={styles.text}>
                            <h2>Бесплатная доставка</h2>
                            <p>По всей украине при заказе от 1399 гривен ₴.</p>
                        </div>
                    </div>
                    <div className={styles.advantage}>
                        <Refresh className={styles.icon}/>
                        <div className={styles.text}>
                            <h2>Возврат в течении 30 дней</h2>
                            <p>Возврат товара в течении 30 дней с момента покупки.</p>
                        </div>
                    </div>
                    <div className={styles.advantage}>
                        <Support className={styles.icon}/>
                        <div className={styles.text}>
                            <h2>Поддержка 24/7</h2>
                            <p>Пишите нам. Мы работаем 24 часа в сутки. 7 дней в неделю.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
