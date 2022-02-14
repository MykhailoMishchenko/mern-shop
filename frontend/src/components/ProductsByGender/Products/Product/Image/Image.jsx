import React from "react";
import {NavLink} from "react-router-dom";

const Image = ({_id, isGrid, image, name}) => {
  return (
    <NavLink to={`/product/${_id}`}>
      <img
        style={isGrid ? {width: "245px", height: "163px"} : null}
        src={image}
        alt={name} />
    </NavLink>
  );
};

export default Image;
