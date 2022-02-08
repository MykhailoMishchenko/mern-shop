import React from "react";
import {NavLink} from "react-router-dom";

const Title = ({product}) => <NavLink to={`/product/${product._id}`}><h3>{product.name}</h3></NavLink>;

export default Title;
