import React from "react";
import styles from "./Nav.module.scss";
import Rating from "../../../common/Rating/Rating";

const Nav = ({name, rating, numReviews, _id, countInStock, history}) => {
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

export default Nav;
