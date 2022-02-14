import React, {useEffect, useState} from "react";
import styles from "./Product.module.scss";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Image from "./Image/Image";
import Favorite from "./Favorite/Favorite";
import AboutProduct from "./AboutProduct/AboutProduct";
import Underline from "./Underline/Underline";
import Payments from "./Payments/Payments";
import PaymentsInformation from "./PaymentsInformation/PaymentsInformation";
import Characteristic from "./Characteristic/Characteristic";


const Product = ({product, history}) => {

  const
    [isFavorite, setIsFavorite] = useState(false),
    [qty, setQty] = useState(1),
    params = useParams(),
    { favoriteItems } = useSelector(state => state?.favorite)

  const
    addToCartHandler = () => {
      history.push(`/cart/${params.id}?qty=${qty}`);
    },
    addToFavoriteHandler = () => {
      history.push(`/favorite/${params.id}`);
    };

  useEffect(() => {
    favoriteItems.forEach(item => {
      if(item._id === product._id) {
        setIsFavorite(true)
      } else {
        setIsFavorite(false)
      }
    })
  }, [favoriteItems])

  return (
    <div className="container">
      <main className={styles.wrapperMain}>
        <Image
          name={product.name}
          image={product.image}
          countInStock={product.countInStock}
          sale={product.sale}
          percent={product.percent}
        />
        <div className={styles.details}>
          <Favorite
            isFavorite={isFavorite}
            addToFavoriteHandler={addToFavoriteHandler}
            history={history}
          />
          <AboutProduct
            gender={product.gender}
            frameMaterial={product.frameMaterial}
            frameForGlasses={product.frameForGlasses}
            brand={product.brand}
          />
          <Underline />
          <Payments
            setQty={setQty}
            qty={qty}
            percent={product.percent}
            countInStock={product.countInStock}
            sale={product.sale}
            addToCartHandler={addToCartHandler}
            price={product.price}
          />
          <Underline />
          <PaymentsInformation />
          <Underline />
          <Characteristic
            brand={product.brand}
            frameForGlasses={product.frameForGlasses}
            frameMaterial={product.frameMaterial}
            gender={product.gender}
            lensMaterial={product.lensMaterial}
            mirrored={product.mirrored}
            gradient={product.gradient}
            polarization={product.polarization}
            lensColor={product.lensColor}
          />
        </div>
      </main>
    </div>
  );
};

export default Product;
