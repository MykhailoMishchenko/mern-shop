import React, {useEffect} from "react";
import TitlePage from "../common/TitlePage/TitlePage";
import Cart from "../components/Cart/Cart";
import {useDispatch, useSelector} from "react-redux";
import {addToCartRequest} from "../redux/Cart/actions";

const CartPage = ({match, location}) => {
  const
    id = match.params.id,
    qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const
    dispatch = useDispatch(),
    {cartItems} = useSelector(state => state?.cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCartRequest(id, qty));
    } else return
  }, []);

  return (
    <div className="container">
      <TitlePage title="Корзина" />
      <Cart products={cartItems} dispatch={dispatch}/>
    </div>
  );
};

export default CartPage;
