import React from "react";
import styles from "./Details.module.scss";
import Image from "./Image/Image";
import Favorite from "./Favorite/Favorite";
import AboutProduct from "./AboutProduct/AboutProduct";
import Button from "./Button/Button";
import Underline from "./Underline/Underline";
import Advantages from "./Advantages/Advantages";
import AboutPayment from "./AboutPayment/AboutPayment";
import Characteristic from "./Characteristic/Characteristic";

const Details = ({product, addToFavoriteHandler, addToCartHandler, qty, setQty, history, isFavorite}) => {
  return (
    <>
      {
        product !== null
          ? <>

            <div className="container">
              <main className={styles.wrapperMain}>
                <Image product={product}/>
                <div className={styles.details}>
                  <Favorite isFavorite={isFavorite} addToFavoriteHandler={addToFavoriteHandler} history={history}/>
                  <AboutProduct product={product}/>
                  <Underline/>
                  <Button product={product} setQty={setQty} qty={qty} addToCartHandler={addToCartHandler}/>
                  <Underline/>
                  <Advantages/>
                  <AboutPayment/>
                  <Underline/>
                  <Characteristic product={product}/>
                </div>
              </main>
            </div>
          </>
          : null
      }
    </>
  );
};

export default Details;
