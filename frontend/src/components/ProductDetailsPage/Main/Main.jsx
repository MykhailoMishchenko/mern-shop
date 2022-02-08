import React, {useEffect, useState} from "react";
import {ScrollToTopOnMount} from "../../../common/ScrollToTop/ScrollToTopOnMount";
import {useHistory, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Product from "../Product/Product";

const Main = ({product}) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const [qty, setQty] = useState(1);
  const history = useHistory();
  const params = useParams();

  const addToCartHandler = () => {
    history.push(`/cart/${params.id}?qty=${qty}`)
  }
  const addToFavoriteHandler = () => {
    history.push(`/favorite/${params.id}`)
  }
  const changeQty = (value) => setQty(value)

  const {
    favoriteItems
  } = useSelector(state => state?.favorite)

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
    <>
      <ScrollToTopOnMount />
      {
        product !== null
          ? <Product
            product={product}
            history={history}
            addToCartHandler={addToCartHandler}
            addToFavoriteHandler={addToFavoriteHandler}
            qty={qty} setQty={changeQty}
            isFavorite={isFavorite}
          />
          : null
      }
    </>
  );
};

export default Main;
