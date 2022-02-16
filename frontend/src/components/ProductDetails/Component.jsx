import React from "react";
import TitlePage from "../../common/TitlePage/TitlePage";
import Nav from "./Nav/Nav";
import Product from "./Product/Product";
import {useHistory} from "react-router-dom";
import TopRatedProducts from "./TopRatedProducts/TopRatedProducts";

const Component = ({product}) => {

  const history = useHistory();

  return (
    <>
      {
        product !== null
          ? <>
            <TitlePage title={product.name} />
            <Nav
              _id={product._id}
              name={product.name}
              countInStock={product.countInStock}
              numReviews={product.numReviews}
              rating={product.rating}
              history={history}
            />
          <Product product={product} history={history}/>
          <TopRatedProducts/>
          </>
          : null
      }
    </>
  );
};

export default Component;
