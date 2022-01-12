import React from 'react';
import styles from "./Product.module.scss";
import Rating from "../../../common/Rating/Rating";
import {calcSalePrice} from "../../../utils/calcSalePrice"
import {NavLink} from "react-router-dom";
import {getLastPrice} from "../../../utils/getLastPrice"

const Product = ({product}) => {

    const {
        name,
        image,
        price,
        rating,
        sale,
        percent,
        _id
    } = product;

    return (
        <div className={styles.item}>
            {sale ? <div className={styles.discount}>-{percent}% </div> : null}
            <NavLink to={`/product/${_id}`}>
                <img
                  style={{width: "245px", height: "163px"}}
                  src={image}
                  alt={name}/>
            </NavLink>
            <div className={styles.info}>
                <NavLink to={`/product/${_id}`} className={styles.title}><p className={styles.nameOfProduct}>{name}</p></NavLink>
                {
                    sale
                        ? <p
                            data-price={getLastPrice(price)}
                            className={styles.newPrice}>
                            ₴ {Math.floor(calcSalePrice(price, percent))}</p>
                        : <p className={styles.priceOfProduct}>₴ {Math.floor(price)}</p>
                }
                <Rating value={rating}/>
            </div>
        </div>
    );
};

export default Product;
