import React from "react";
import Main from "../components/ProductDetailsPage/Main/Main";
import SkeletonProductDetails from "../common/Skeletons/ProductDetails/SkeletonProductDetails";
import {useGetProductsByIdQuery} from "../redux/Products/productsApi";

const ProductDetailsPage = ({match}) => {

  const {data: product, isLoading} = useGetProductsByIdQuery(match.params.id)

  return (
    <>
      {
        isLoading
        ? <SkeletonProductDetails />
        : <Main product={product}/>
      }
    </>
  );
};

export default ProductDetailsPage;
