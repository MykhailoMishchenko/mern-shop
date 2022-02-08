import React from "react";
import styles from "./Main.module.scss";
import {ReactComponent as EmptyCart} from "../../../assets/image/storyset/emptyCart.svg";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {addToCartRequest, removeFromCartRequest} from "../../../redux/Cart/actions";
import Spinner from "../../../common/Spinner/Spinner";
import CartProducts from "../CartProducts/CartProducts";
import CartOrder from "../CartOrder/CartOrder";
import Empty from "../../../common/EmptyPage/Empty/Empty";

const Main = ({products}) => {

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state?.cart);

  const history = useHistory();

  const
    goToPay = () => history.push("/shipping"),
    addToCart = (id, value) => dispatch(addToCartRequest(id, Number(value))),
    removeFromCart = (id) => dispatch(removeFromCartRequest(id)),
    count = products.reduce((acc, item) => acc + item.qty, 0);


  return (
    <div className={styles.wrapper}>
      <h2>Корзина</h2>
      <div className={styles.main}>
        {
          products.length !== 0
            ? loading
              ? <Spinner />
                : <CartProducts products={products} addToCart={addToCart} removeFromCart={removeFromCart}/>
            : <Empty Component={EmptyCart} history={history} text="Ваша корзина пуста, для выбора товаров "/>
        }
        <CartOrder products={products} count={count} goToPay={goToPay}/>
      </div>
    </div>
  );
};

export default Main;
