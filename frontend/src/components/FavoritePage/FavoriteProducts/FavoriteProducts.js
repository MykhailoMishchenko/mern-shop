import React from "react";
import styles from "./FavoriteProducts.module.scss";
import Spinner from "../../../common/Spinner/Spinner";
import {NavLink, useHistory} from "react-router-dom";
import {getLastPrice} from "../../../utils/getLastPrice";
import {calcSalePrice} from "../../../utils/calcSalePrice";
import {ReactComponent as Trash} from "../../../assets/image/icon/trash.svg";
import {ReactComponent as Empty} from "../../../assets/image/storyset/emptyFavorite.svg";
import {useDispatch, useSelector} from "react-redux";
import {removeFromFavoriteRequest} from "../../../redux/Favorite/actions";

const FavoriteProducts = ({products}) => {

  const {loading} = useSelector(state => state?.favorite);
  const dispatch = useDispatch();

  const history = useHistory();

  return (
   <div className={styles.wrapper}>
     <h2>Избранное</h2>
     <div className={styles.main}>
       {
         products.length !== 0
         ? loading
           ? <Spinner/>
           : <div className={styles.goods}>
               {
                 products.map(product => (
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
                       <div className={styles.description}>
                         <NavLink to={`/product/${product._id}`}>
                           <h3>{product.name}</h3>
                         </NavLink>
                         <div className={styles.details}>
                           <div className={styles.characteristics}>
                             <div className={styles.characteristic}>
                               <p>Категория</p>
                               <p>
                                 {
                                   product.category === "sunglasses"
                                     ? "Солнцезащитные очки"
                                     : "Аксессуары"
                                 }
                               </p>
                             </div>
                             <div className={styles.characteristic}>
                               <p>Бренд</p>
                               <p>{product.brand}</p>
                             </div>
                             <div className={styles.characteristic}>
                               <p>Пол</p>
                               <p>
                                 {
                                   product.gender === "male"
                                   ? "Мужские"
                                   : "Женские"
                                 }
                               </p>
                             </div>
                             <div className={styles.characteristic}>
                               <p>Наличие на складе</p>
                               <p>
                                 {
                                   product.countInStock === 0
                                     ? "Нет в наличии"
                                     : "Есть в наличии"
                                 }
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
                                 <Trash onClick={() => dispatch(removeFromFavoriteRequest(product._id))} />
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className={styles.underline}></div>
                   </div>
                 ))
               }
             </div>
         : <div className={styles.emptyWrapper}>
           <Empty className={styles.empty}/>
             <p>
               Ваш список избранных товаров пуст,
               <span onClick={() => history.push("/")}> вернитесь назад</span>
               , для выбора товаров</p>
           </div>
       }
     </div>
   </div>
  );
};

export default FavoriteProducts;
