import React, {useEffect} from "react";
import styles from "./Summary.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../../../redux/Order/CreateOrderServer/action";

const Summary = ({cartItems, payment, shipping}) => {

  const {
    loading, order, error
  } = useSelector(state => state?.createOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    if(order){
      console.log(order);
    }
  }, [order])


  //calculate price
  const count = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));
  const totalPrice = (Number(itemsPrice) + Number(taxPrice)).toFixed(2);

  const createOrderHandler = () => dispatch(createOrder({
    orderItems: cartItems,
    shippingAddress: shipping,
    paymentMethod: payment,
    itemsPrice,
    shippingPrice: 0,
    taxPrice,
    totalPrice
  }));

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summary}>
        <div className={styles.summaryTitle}>
          <div className={styles.title}>
            <h3>Всего ({count}) {count <= 1 ? "товар" : count <= 4 ? "товара" : "товаров"}</h3>
            <p>на сумму ₴ {itemsPrice} </p>
          </div>
          <div className={styles.descriptions}>
            <div><p>Товара на суму</p> <p>₴ {itemsPrice}</p></div>
            <div><p>ПДВ</p> <p>₴ {taxPrice}</p></div>
            <div><p>Доставка</p> <p>Уточнять</p></div>
            <div><p>Всего</p> <p>₴ {totalPrice}</p></div>
          </div>
        </div>
        <div className={styles.summaryButton}>
          <button onClick={createOrderHandler}>
            Разместить Заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
