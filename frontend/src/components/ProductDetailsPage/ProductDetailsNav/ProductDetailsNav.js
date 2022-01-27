import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import styles from "./ProductDetailsNav.module.scss";
import Rating from "../../../common/Rating/Rating";

const ProductDetailsNav = ({name, rating, numReviews, _id, countInStock}) => {
  const history = useHistory();
  return (
    <div className={styles.wrapperHeader}>
      <div className="container">
        <nav>
          <p onClick={() => history.goBack()}>Назад</p>
        </nav>
        <header>
          <h2>{name}</h2>
          <div className={styles.headerDetails}>
            <div className={styles.headerDetailsReview}>
              <Rating value={rating}/> <p>{numReviews} отз.</p>
            </div>
            <div className={styles.headerDetailsId}>
              <p>Арт : <strong>{_id}</strong></p>
              <p>
                {
                  !!countInStock
                    ? <strong>В наличии</strong>
                    : <strong>Нет в наличии</strong>
                }
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default ProductDetailsNav;
