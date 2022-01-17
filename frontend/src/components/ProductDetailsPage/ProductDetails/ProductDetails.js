import React, {useState} from "react";
import styles from "./ProductDetails.module.scss";
import {ScrollToTopOnMount} from "../../../common/ScrollToTop/ScrollToTopOnMount";
import ProductDetailsNav from "../ProductDetailsNav/ProductDetailsNav";
import {calcSalePrice} from "../../../utils/calcSalePrice";
import {getLastPrice} from "../../../utils/getLastPrice";
import {ReactComponent as Like} from "../../../assets/image/icon/heart.svg";
import {ReactComponent as Truck} from "../../../assets/image/icon/truck.svg";
import {ReactComponent as Refresh} from "../../../assets/image/icon/refresh.svg";
import {ReactComponent as Support} from "../../../assets/image/icon/support.svg";
import {ReactComponent as Visa} from "../../../assets/image/icon/VISA.svg";
import MasterCard from "../../../assets/image/icon/MasterCard.png";
import NovaPoshta from "../../../assets/image/icon/novaposhta.png";
import {useHistory, useParams} from "react-router-dom";

const ProductDetails = ({product}) => {
  const [qty, setQty] = useState(1);
  const history = useHistory();
  const params = useParams();

  const addToCartHandler = () => {
    history.push(`/cart/${params.id}?qty=${qty}`)
  }

  return (
    <>
      <ScrollToTopOnMount />
      {
        product !== null
          ? <>
            <ProductDetailsNav _id={product._id} name={product.name} countInStock={product.countInStock}
                               rating={product.rating} numReviews={product.numReviews} />
            <div className="container">
              <main className={styles.wrapperMain}>
                <div className={product.countInStock ? styles.photo : styles.photoWithFilter}>
                  {product.sale ? <div className={styles.discount}>-{product.percent}%</div> : null}
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.details}>
                  <Like className={styles.favorite} />
                  <div className={styles.aboutProduct}>
                    <h3>О Товаре</h3>
                    <div className={styles.descriptions}>
                      <div><p>Пол</p> <p>{product.gender === "male" ? "Мужские" : "Женские"}</p></div>
                      <div><p>Бренд</p> <p>{product.brand}</p></div>
                      <div><p>Форма Оправы</p> <p>{product.frameForGlasses}</p></div>
                      <div><p>Материал Оправы</p> <p>{product.frameMaterial}</p></div>
                    </div>
                  </div>
                  <div className={styles.underline}></div>
                  <div className={styles.buyProduct}>
                    {
                      product.sale ? <strong
                          className={styles.withBefore}
                          data-price={getLastPrice(product.price)}>
                          ₴ {Math.floor(calcSalePrice(product.price, product.percent))}</strong>
                        : <strong>₴ {product.price}</strong>
                    }
                    <button
                      onClick={addToCartHandler}
                      disabled={!(!!product.countInStock)}
                      className={!!product.countInStock ? null : styles.isDisabled}>
                      Добавить в Корзину
                    </button>
                    <div className={product.countInStock ? styles.Qty : styles.QtyDisabled}>
                      <p>кол-во</p>
                      {
                        product.countInStock > 0 ? (
                          <select
                            value={qty}
                            onChange={e => setQty(e.target.value)}
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
                        ) : <p>0</p>
                      }
                    </div>
                  </div>
                  <div className={styles.underline}></div>
                  <div className={styles.advantages}>
                    <div className={styles.advantage}><Truck /> <p>Доставка по Украине</p></div>
                    <div className={styles.advantage}><Refresh /> <p>Возврат & Обмен</p></div>
                    <div className={styles.advantage}><Support /> <p>Спрашивайте, если возникли вопросы</p></div>
                  </div>
                  <div className={styles.AboutPayment}>
                    <div>
                      <h3>Гарантированная безопасная оплата</h3>
                      <div className={styles.line}></div>
                    </div>
                    <div>
                      <Visa />
                      <img src={MasterCard} alt="MasterCard" />
                      <img src={NovaPoshta} alt="NovaPoshta" />
                    </div>
                  </div>
                  <div className={styles.underline}></div>
                  <div className={styles.characteristic}>
                    <h3>Детальная Информация</h3>
                    <div className={styles.descriptions}>
                      <div><p>Пол</p> <p>{product.gender === "male" ? "Мужские" : "Женские"}</p></div>
                      <div><p>Бренд</p> <p>{product.brand}</p></div>
                      <div><p>Форма Оправы</p> <p>{product.frameForGlasses}</p></div>
                      <div><p>Материал Оправы</p> <p>{product.frameMaterial}</p></div>
                      <div><p>Цвет Линз</p> <p>{product.lensColor}</p></div>
                      <div><p>Поляризация</p> <p>{product.polarization ? "Да" : "Нет"}</p></div>
                      <div><p>Зеркальная</p> <p>{product.mirrored ? "Да" : "Нет"}</p></div>
                      <div><p>Градиентная</p> <p>{product.gradient ? "Да" : "Нет"}</p></div>
                      <div><p>Материал Линз</p> <p>{product.lensMaterial}</p></div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </>
          : null
      }
    </>
  );
};

export default ProductDetails;
