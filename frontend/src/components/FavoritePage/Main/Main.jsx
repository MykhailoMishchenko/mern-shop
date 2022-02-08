import React from "react";
import styles from "./Main.module.scss";
import Spinner from "../../../common/Spinner/Spinner";
import {useHistory} from "react-router-dom";
import {ReactComponent as EmptyFavorite} from "../../../assets/image/storyset/emptyFavorite.svg";
import {useDispatch, useSelector} from "react-redux";
import {removeFromFavoriteRequest} from "../../../redux/Favorite/actions";
import FavoriteProducts from "../FavoriteProducts/FavoriteProducts";
import Empty from "../../../common/EmptyPage/Empty/Empty";

const Main = ({products}) => {

  const {loading} = useSelector(state => state?.favorite);
  const dispatch = useDispatch();

  const history = useHistory();

  const removeFromFavorite = (id) => dispatch(removeFromFavoriteRequest(id));

  return (
   <div className={styles.wrapper}>
     <h2>Избранное</h2>
     <div className={styles.main}>
       {
         products.length !== 0
         ? loading
           ? <Spinner/>
           : <FavoriteProducts products={products} removeFromFavorite={removeFromFavorite}/>
         : <Empty Component={EmptyFavorite} text="Ваш список избранных товаров пуст, " history={history}/>
       }
     </div>
   </div>
  );
};

export default Main;
