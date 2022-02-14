import React from "react";
import {NavLink} from "react-router-dom";

const Title = ({_id, name}) => {
  return (
    <NavLink to={`/product/${_id}`}>
      <h3>{name}</h3>
    </NavLink>
  );
};

export default Title;
