import React from "react";
import ProductDetails from "../components/ProductDetailsPage/ProductDetails/ProductDetails";
import SkeletonProductDetails from "../common/Skeletons/ProductDetails/SkeletonProductDetails";
import {useGetProductsByIdQuery} from "../redux/Products/productsApi";

const ProductDetailsPage = ({match}) => {

  const {data: product, isLoading} = useGetProductsByIdQuery(match.params.id)

  return (
    <>
      {
        isLoading
        ? <SkeletonProductDetails />
        : <ProductDetails product={product}/>
      }
    </>
  );
};

export default ProductDetailsPage;
