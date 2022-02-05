import React from "react";
import styles from "./CartProducts.module.scss";
import {ReactComponent as Trash} from "../../../assets/image/icon/trash.svg";
import {ReactComponent as EmptyCart} from "../../../assets/image/storyset/emptyCart.svg";
import {useDispatch, useSelector} from "react-redux";
import {getLastPrice} from "../../../utils/getLastPrice";
import {calcSalePrice} from "../../../utils/calcSalePrice";
import {calcFinalPrice} from "../../../utils/calcFinalPrice";
import {NavLink, useHistory} from "react-router-dom";
import {addToCartRequest, removeFromCartRequest} from "../../../redux/Cart/actions";
import Spinner from "../../../common/Spinner/Spinner";

const CartProducts = ({products}) => {
  const count = products.reduce((acc, item) => acc + item.qty, 0);
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state?.cart);

  const history = useHistory();

  const goToPay = () => history.push("/shipping")

  return (
    <div className={styles.wrapper}>
      <h2>Корзина</h2>
      <div className={styles.main}>
        {
          products.length !== 0
            ? loading
              ? <Spinner />
              : <div className={styles.goods}>
                {
                  products.map(product => {
                    return (
                      <div key={product._id}>
                        <div className={styles.item}>
                          <div className={styles.photo}>
                            <NavLink to={`/product/${product._id}`}><img src={product.image}
                                                                         alt={product.name} /></NavLink>
                            {product.sale ? <div className={styles.discount}>-{product.percent}%</div> : null}
                          </div>
                          <div className={styles.description}>
                            <NavLink to={`/product/${product._id}`}><h3>{product.name}</h3></NavLink>
                            <div className={styles.details}>
                              <div className={styles.characteristics}>
                                <div className={styles.characteristic}>
                                  <p>Категория</p><p>
                                  {product.category === "sunglasses" ? "Солнцезащитные очки" : "Аксессуары"}
                                </p>
                                </div>
                                <div className={styles.characteristic}>
                                  <p>Бренд</p><p>{product.brand}</p>
                                </div>
                                <div className={styles.characteristic}>
                                  <p>Пол</p>
                                  <p>{product.gender === "male" ? "Мужские" : "Женские"}</p>
                                </div>
                                <div className={styles.characteristic}>
                                  <p>Кол-во</p>
                                  <p>
                                    <select
                                      value={product.qty}
                                      onChange={e => dispatch(addToCartRequest(product._id, Number(e.target.value)))}
                                    >
                                      {
                                        [...Array(product.countInStock).keys()].map(x => (
                                          <option
                                            key={x + 1}
                                            value={x + 1}
                                          >{x + 1}</option>
                                        ))
                                      }
                                    </select>
                                  </p>
                                </div>
                                <div className={styles.characteristic}>
                                  <div className={styles.PriceAndTrash}>
                                    {
                                      product.sale ? <strong
                                          className={styles.withBefore}
                                          data-price={getLastPrice(product.price)}>
                                          ₴ {Math.floor(calcSalePrice(product.price, product.percent))}</strong>
                                        : <strong>₴ {product.price}</strong>
                                    }
                                    <Trash onClick={() => dispatch(removeFromCartRequest(product._id))} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.underline}></div>
                      </div>
                    );
                  })
                }
              </div>
            : <div className={styles.emptyWrapper}>
              <EmptyCart className={styles.empty} />
              <p>Ваша корзина пуста, <span onClick={() => history.push("/")}>вернитесь назад</span>, для выбора товаров</p>
            </div>
        }
        <div className={styles.order}>
          <div className={styles.orderTitle}>
            {
              products.length === 0
                ? <h3>Ваша корзина пустая</h3>
                : <>
                  <h3>Всего {count} {count <= 1 ? "товар" : count <= 4 ? "товара" : "товаров"}</h3>
                  <p>на сумму ₴ {Math.floor(calcFinalPrice(products))}</p>
                </>
            }
          </div>
          <div className={styles.goNext}>
            <button
              onClick={goToPay}
              disabled={products.length === 0}
              className={products.length === 0 ? styles.btnDisabled : null}>Перейти к Оплате
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
