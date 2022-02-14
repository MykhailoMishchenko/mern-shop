import React from "react";
import {useGetProductsByIdQuery} from "../redux/Products/productsApi";
import SkeletonProduct from "../common/Skeletons/SkeletonProduct/SkeletonProduct";
import Component from "../components/ProductDetails/Component";
import {ScrollToTopOnMount} from "../common/ScrollToTop/ScrollToTopOnMount";

const ProductDetailsPage = ({match}) => {

  const {data, isLoading} = useGetProductsByIdQuery(match.params.id)

  return (
    <>
      <ScrollToTopOnMount/>
      {
        isLoading
        ? <SkeletonProduct/>
          : <Component product={data}/>
      }
    </>
  );
};

export default ProductDetailsPage;
