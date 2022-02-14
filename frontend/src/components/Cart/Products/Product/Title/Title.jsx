import React from "react";
import {NavLink} from "react-router-dom";

const Title = ({product, name}) => {
  return (
    <NavLink to={`/product/${product}`}><h3>{name}</h3></NavLink>
  );
};

export default Title;
