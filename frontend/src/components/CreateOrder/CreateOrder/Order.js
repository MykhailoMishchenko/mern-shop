import React from "react";
import styles from "./order.module.scss";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {calcSalePrice} from "../../../utils/calcSalePrice";


const Order = () => {

  const {
    shipping, payment
  } = useSelector(state => state?.order);
  const cart = useSelector(state => state?.cart);
  const {cartItems} = cart;

  //calculate price
  const count = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const itemsPrice = cart.cartItems.reduce((acc,item) => acc + item.price * item.qty, 0);
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)))
  const totalPrice = (Number(itemsPrice) + Number(taxPrice)).toFixed(2)

  return (
    <>
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <table className="styled-table">
          <thead>
          <tr>
            <th>Детали Заказа</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Адрес</td>
            <td>{shipping.city}, {shipping.country}. {shipping.street}. Отделение Новой почты
                               - {shipping.department}</td>
          </tr>
          <tr>
            <td>Метод оплаты</td>
            <td>{payment}</td>
          </tr>
          <tr>
            <td>Количество товаров</td>
            <td>{cartItems.length}</td>
          </tr>
          <tr>
            <td>Оплата</td>
            <td>{false ? "Оплачено" : "Не Оплачено"}</td>
          </tr>
          <tr>
            <td>Доставка</td>
            <td>{false ? "Доставлено" : "Не Доставлено"}</td>
          </tr>
          </tbody>
        </table>
      </div>
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
            <button>
             Разместить Заказ
            </button>
          </div>
        </div>
      </div>
    </div>
      <h4>Ваш заказ</h4>
      {
        cartItems.map(product => (
          <div key={product._id}>
            <div className={styles.item}>
              <div className={styles.photo}>
                <NavLink to={`/product/${product._id}`}>
                  <img src={product.image} alt={product.name} />
                </NavLink>
                {
                  product.sale &&
                  <div className={styles.discount}>
                    {product.percent}%
                  </div>
                }
              </div>
              <div className={styles.descriptionItem}>
                <NavLink to={`/product/${product._id}`}>
                  <h3>{product.name}</h3>
                </NavLink>
                <div className={styles.detailsItem}>
                  <div className={styles.characteristicsItem}>
                    <div className={styles.characteristicItem}>
                      <p>Категория</p>
                      <p>
                        {
                          product.category === "sunglasses"
                            ? "Солнцезащитные очки"
                            : "Аксессуары"
                        }
                      </p>
                    </div>
                    <div className={styles.characteristicItem}>
                      <p>Бренд</p>
                      <p>{product.brand}</p>
                    </div>
                    <div className={styles.characteristicItem}>
                      <p>Пол</p>
                      <p>
                        {
                          product.gender === "male"
                            ? "Мужские"
                            : "Женские"
                        }
                      </p>
                    </div>
                    <div className={styles.characteristicItem}>
                      <p>Количество</p>
                      <p>
                        {
                          product.qty
                        }
                      </p>
                    </div>
                    <div className={styles.characteristicItem}>
                      <p>Цена</p>
                      <p>
                        {
                          product.sale ?
                              <>₴ {Math.floor(calcSalePrice(product.price, product.percent))}</>
                            : <>₴ {product.price}</>
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.underline}></div>
          </div>
        ))
      }
    </>
  );
};

export default Order;
