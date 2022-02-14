import React from "react";
import {NavLink} from "react-router-dom";

const Image = ({_id, image, name}) => {
  return (
    <NavLink to={`/product/${_id}`}>
      <img
        style={{width: "245px", height: "163px"}}
        src={image}
        alt={name}/>
    </NavLink>
  );
};

export default Image;
