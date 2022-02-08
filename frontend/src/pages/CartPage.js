import React, {useEffect} from "react";
import Main from "../components/CartPage/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {addToCartRequest} from "../redux/Cart/actions";
import Title from "../common/Title/Title";



const CartPage = ({match, location}) => {
  const
    id = match.params.id,
    qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state?.cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCartRequest(id, qty));
    } else return
  }, []);

  return (
    <div className="container">
      <Title title="Онлайн магазин | Корзина"/>
      <Main products={cartItems} />
    </div>
  );
};

export default CartPage;
