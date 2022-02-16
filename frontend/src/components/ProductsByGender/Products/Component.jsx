import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeToGrid, changeToLine} from "../../../redux/Filter/Grid/actions";
import {allFilterClickListener, filter} from "../../../utils/Filter";
import _ from "lodash";
import Buttons from "./Nav/Buttons";
import Filter from "../../../common/Filter/Filter";
import Products from "./Products/Products";

const Component = ({data, isSale}) => {

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
  const setSort = () => setSortPrice(!sortPrice);

  useEffect(() => {
    setProducts(filter(data, state.filtration))
  }, [state])

  useEffect(() => {
    if(sortPrice) setProducts(_.orderBy(filter(data, state.filtration), "price").reverse())
    else setProducts(_.orderBy(filter(data, state.filtration), "price"))
  }, [sortPrice])

  return (
    <div>
      <div className="container">
        <Buttons
          isGrid={isGrid}
          sortPrice={sortPrice}
          changeToGridHandler={changeToGridHandler}
          changeToLineHandler={changeToLineHandler}
          setFilter={setFilter}
          setSort={setSort}
        />
        <Filter
          filterIsActive={filterIsActive}
          allFilterClickListener={allFilterClickListener}
          setState={setState}
          isSale={isSale}
        />
      </div>
      <Products products={products} isGrid={isGrid}/>
    </div>
  );
};

export default React.memo(Component);
