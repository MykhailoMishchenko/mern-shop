import React, {useEffect, useState} from "react";
import styles from "./Products.module.scss";
import {useDispatch, useSelector} from "react-redux";
import Rating from "../../../common/Rating/Rating";
import {NavLink} from "react-router-dom";
import {calcSalePrice} from "../../../utils/calcSalePrice";
import {getLastPrice} from "../../../utils/getLastPrice";
import {ReactComponent as FilterImg} from "../../../assets/image/icon/filter.svg";
import {ReactComponent as Empty} from "../../../assets/image/storyset/emptyProducts.svg";
import {config} from "../../../utils/filter/config";
import {changeToGrid, changeToLine} from "../../../redux/Filter/Grid/actions";
import _ from "lodash";


const Products = ({data, isSale}) => {

  const [state, setState] = useState({
    filtration: {
      polarization: {},
      frameForGlasses: {},
      brand: {},
      sale: {},
      gender: {}
    }
  });
  const [products, setProducts] = useState([]);
  const [sortPrice, setSortPrice] = useState(false);
  const [filterIsActive, setFilterIsActive] = useState(false);
  const {isGrid} = useSelector(state => state?.markup);

  const dispatch = useDispatch();

  const changeToLineHandler = () => dispatch(changeToLine());
  const changeToGridHandler = () => dispatch(changeToGrid());
  const allFilterClickListener = (name, filterProp) => {
    setState(prevState => {
      if (prevState.filtration[filterProp].hasOwnProperty(name)) {
        const res = {...prevState};
        delete res.filtration[filterProp][name];
        return res;
      } else {
        return {
          filtration: {
            ...prevState.filtration,
            [filterProp]: {
              ...prevState.filtration[filterProp],
              [name]: !prevState.filtration[filterProp][name]
            }
          }
        };
      }
    });
  };


  const filter = (products = [], filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter(product => {
      return filterKeys.every(key => {
        if (!Object.keys(filters[key]).length) return true;
        if (Array.isArray(product[key])) {
          return product[key].some(keyEle => Object.keys(filters[key]).includes(keyEle.map(String)));
        }
        return Object.keys(filters[key]).includes(product[key].toString());
      });
    });
  };

  useEffect(() => {
    setProducts(filter(data, state.filtration))
  }, [state])

  useEffect(() => {
    if(sortPrice) setProducts(_.orderBy(filter(data, state.filtration), "price").reverse())
    else setProducts(_.orderBy(filter(data, state.filtration), "price"))
  }, [sortPrice])

  return (
    <>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.filter}>
            <span onClick={() => setFilterIsActive(!filterIsActive)}><FilterImg /></span>
          </div>
          <div className={styles.grid}>
           <i className={isGrid ? "fas fa-grip-lines filter_icon" : "fas fa-grip-lines filter_icon active_icon"} onClick={changeToLineHandler}></i>
            <i className={isGrid ? "fas fa-grip-horizontal filter_icon active_icon" : "fas fa-grip-horizontal filter_icon"} onClick={changeToGridHandler}></i>
          </div>
          <div className={styles.fromTo}>
              <p onClick={() => setSortPrice(!sortPrice)}>Цена <i className={sortPrice ? "fas fa-arrow-up sort_icon" : "fas fa-arrow-up"}></i></p>
          </div>
        </div>
        <div className={filterIsActive ? styles.filterWrapperVisible : styles.filterWrapperHidden}>
          <div className={styles.filterWrapper}>
            <div className={styles.polarization}>
              <h5>Поляризация</h5>
              <div className={styles.list}>
                {config.polarization.map(item => (
                  <label key={item.id} className={styles.label}>
                    <input onClick={ () => allFilterClickListener(item.value, "polarization")}
                           type="checkbox"
                           className={styles.input} />
                    <div className={styles.value}>
                      {item.value
                        ? <p>С поляризацией <i className="fas fa-check"></i></p>
                        : <p>Без поляризации <i className="fas fa-times"></i></p>
                      }
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className={styles.frameForGlasses}>
              <h5>Форма оправы</h5>
              <div className={styles.list}>
                {config.frameForGlasses.map(item => (
                  <label key={item.id} className={styles.label}>
                    <input onClick={() => allFilterClickListener(item.value, "frameForGlasses")}
                           type="checkbox"
                           className={styles.input} />
                    <div className={styles.value}>{item.img} {item.value}</div>
                  </label>
                ))}
              </div>
            </div>
            <div className={styles.brand}>
              <h5>Бренд</h5>
              <div className={styles.list}>
                {config.brand.map(item => (
                  <label key={item.id} className={styles.label}>
                    <input onClick={() => allFilterClickListener(item.value, "brand")} type="checkbox"
                           className={styles.input} />
                    <div className={styles.value}>{item.value}</div>
                  </label>
                ))}
              </div>
            </div>
            <div className={styles.price}>
              {
                isSale
                ? <>
                    <h5>Цена</h5>
                    <div className={styles.list}>
                      {config.gender.map(item => (
                        <label key={item.id} className={styles.label}>
                          <input onClick={() => allFilterClickListener(item.value, "gender")} type="checkbox"
                                 className={styles.input} />
                          <div className={styles.value}>{item.value === "male" ? "Мужские" : "Женские"}</div>
                        </label>
                      ))}
                    </div>
                  </>
                  : <>
                    <h5>Цена</h5>
                    <div className={styles.list}>
                      {config.sale.map(item => (
                        <label key={item.id} className={styles.label}>
                          <input onClick={() => allFilterClickListener(item.value, "sale")} type="checkbox"
                                 className={styles.input} />
                          <div className={styles.value}>
                            {item.value
                              ? <p>Со скидкой <i className="fas fa-check"></i></p>
                              : <p>Без скидки <i className="fas fa-times"></i></p>
                            }
                          </div>
                        </label>
                      ))}
                    </div>
                  </>
              }

            </div>
          </div>
        </div>
      </div>
      <div className={isGrid ? styles.listProduct : styles.listProductInLine}>
        {
          products.length === 0
            ? <div className={styles.emptyWrapper}>
              <Empty className={styles.empty}/>
              <p>По таким критериям, товар не найден</p>
            </div>
            : products.map(product => (
            <div key={product._id} className={isGrid ? styles.item : styles.product}>
              {
                product.sale
                  ? <div className={styles.discount}>-{product.percent}% </div>
                  : null
              }
              <NavLink to={`/product/${product._id}`}>
                <img
                  style={isGrid ? {width: "245px", height: "163px"} : null}
                  src={product.image}
                  alt={product.name} />
              </NavLink>
              <div className={styles.info}>
                <NavLink
                  to={`/product/${product._id}`}
                  className={styles.title}>
                  <p className={styles.nameOfProduct}>{product.name}</p>
                </NavLink>
                {
                  product.sale
                    ? <p
                      data-price={getLastPrice(product.price)}
                      className={styles.newPrice}>
                      ₴ {Math.floor(calcSalePrice(product.price, product.percent))}</p>
                    : <p className={styles.priceOfProduct}>₴ {Math.floor(product.price)}</p>
                }
                <Rating value={product.rating} />
                {
                  !isGrid && <div className={styles.characteristic}>
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
                }
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
