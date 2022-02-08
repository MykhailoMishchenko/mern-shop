import React, {useEffect, useState} from "react";
import styles from "./Products.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {changeToGrid, changeToLine} from "../../../redux/Filter/Grid/actions";
import _ from "lodash";
import Product from "./Product";
import Buttons from "./Buttons";
import Filter from "../../../common/Filter/Filter";
import {allFilterClickListener, filter} from "../../../utils/filter";


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
  const setFilter = () => setFilterIsActive(!filterIsActive);
  const setPrice = () => setSortPrice(!sortPrice);


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
        <Buttons
          isGrid={isGrid}
          setFilter={setFilter}
          changeToLineHandler={changeToLineHandler}
          changeToGridHandler={changeToGridHandler}
          setPrice={setPrice}
          sortPrice={sortPrice}
        />
        <Filter
          filterIsActive={filterIsActive}
          allFilterClickListener={allFilterClickListener}
          setState={setState}
          isSale={isSale}
        />
      </div>
      <div className={isGrid ? styles.listProduct : styles.listProductInLine}>
        <Product products={products} isGrid={isGrid}/>
      </div>
    </>
  );
};

export default Products;
