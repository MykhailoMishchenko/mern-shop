import React from "react";
import Nav from "../components/MaleFemaleProductsPage/Nav/Nav";
import SkeletonListOfProducts from "../common/Skeletons/ListOfProducts/SkeletonListOfProducts";
import Products from "../components/MaleFemaleProductsPage/Products/Products";
import Error from "../components/MaleFemaleProductsPage/Error/Error";
import {useAllMaleProductsQuery} from "../redux/Products/productsApi";

const MenPage = () => {

  const {data, isLoading, isError} = useAllMaleProductsQuery();

  return (
    <>
      <Nav gender="male"/>
      <div className="container">
        {
          isLoading
            ? <SkeletonListOfProducts />
            : data && !isError ? <Products data={data} /> : <Error/>
        }
      </div>
    </>
  );
};

export default MenPage;
