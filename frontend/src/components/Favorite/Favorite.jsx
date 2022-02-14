import React from "react";
import styles from "./Favorite.module.scss";
import Spinner from "../../common/Spinner/Spinner";
import Products from "./Products/Products";
import Empty from "../../common/Empty/Empty";
import {ReactComponent as EmptyFavorite} from "../../assets/image/storyset/emptyFavorite.svg";

const Favorite = ({dispatch, products, history, loading}) => {
  return (
    <div className={styles.wrapper}>
      <h2>Избранное</h2>
      <div className={styles.main}>
        {
          products.length !== 0
            ? loading
              ? <Spinner/>
              : <Products products={products} dispatch={dispatch}/>
            : <Empty
              Component={EmptyFavorite}
              text=" Ваш список избранных товаров пуст, для выбора товаров "
              span="вернитесь назад"
              history={history}
            />
        }
      </div>
    </div>
  );
};

export default Favorite;

