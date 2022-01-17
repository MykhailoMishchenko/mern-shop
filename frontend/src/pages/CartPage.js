import React, {useEffect} from "react";
import CartProducts from "../components/CartPage/CartProducts/CartProducts";
import {useDispatch, useSelector} from "react-redux";
import {addToCartRequest} from "../redux/Cart/action";



const CartPage = ({match, location}) => {
  const id = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state?.cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCartRequest(id, qty));
    } else return
  }, []);

  return (
    <div className="container">
      <CartProducts products={cartItems} />
    </div>
  );
};

export default CartPage;
