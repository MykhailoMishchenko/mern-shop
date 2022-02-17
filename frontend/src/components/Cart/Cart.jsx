import React from "react";
import styles from "./Cart.module.scss";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {ReactComponent as EmptyCart} from "../../assets/image/storyset/emptyCart.svg";
import Spinner from "../../common/Spinner/Spinner";
import Products from "./Products/Products";
import Empty from "../../common/Empty/Empty";
import CreateOrder from "./CreateOrder/CreateOrder";

const Cart = ({products, dispatch}) => {

  const count = products.reduce((acc, item) => acc + item.qty, 0);
  const {loading} = useSelector(state => state?.cart);

  const history = useHistory();

  const goToPay = () => history.push("/shipping");

  return (
    <div className={styles.wrapper}>
      <h2>Корзина</h2>
      <div className={styles.main}>
        {
          products.length !== 0
            ? loading
              ? <Spinner />
              : <Products products={products} dispatch={dispatch} history={history} />
            : <Empty
              history={history}
              Component={EmptyCart}
              text="Ваша корзина пуста, для выбора товаров "
              span="вернитесь назад"
            />
        }
        <CreateOrder products={products} goToPay={goToPay} count={count}/>
      </div>
    </div>
  );
};

export default Cart;
