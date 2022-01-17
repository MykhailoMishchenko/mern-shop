import React from 'react';
import styles from './MainNav.module.scss';
import {NavLink} from 'react-router-dom';
import {ReactComponent as User} from '../../assets/image/icon/user.svg';
import {ReactComponent as Bag} from '../../assets/image/icon/shopping-bag.svg';
import {ReactComponent as Like} from '../../assets/image/icon/heart.svg';
import {useSelector} from "react-redux";

const MainNav = () => {
    const comingSoon = (e) => e.preventDefault();
    const {cartItems} = useSelector(state => state?.cart);
    const items = cartItems.length;
    return (
        <nav className={styles.mainNav}>
            <div className='container'>
                <div className={styles.main}>
                    <NavLink to='/'><h1>Online-Shop</h1></NavLink>
                    <ul className={styles.categories}>
                        <li><NavLink activeClassName={styles.active} to='/about-us'>Про нас</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to='/for-women'>Для девушек</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to='/for-men'>Для мужчин</NavLink></li>
                        <li className={styles.comingSoon}>
                            <NavLink onClick={comingSoon}
                                     activeClassName={styles.active} to='/accessories'
                                     className={styles.navComingSoon}>
                                Аксессуары</NavLink>
                        </li>
                        <li><NavLink activeClassName={styles.active} to='/sales'>Распродажа</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to='/blog'>Блог</NavLink></li>
                        <li><NavLink activeClassName={styles.active} to='/contacts'>Контакты</NavLink></li>
                    </ul>
                    <ul className={styles.user}>
                        <li><NavLink activeClassName={styles.active} to='/profile'><User/></NavLink></li>
                        {!!items
                            ? <li data-cart={items} className={styles.cart}><NavLink activeClassName={styles.active} to='/cart'><Bag /></NavLink></li>
                            : <li><NavLink activeClassName={styles.active} to='/cart'><Bag /></NavLink></li>
                        }
                        <li><NavLink activeClassName={styles.active} to='/favorite'><Like/></NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
