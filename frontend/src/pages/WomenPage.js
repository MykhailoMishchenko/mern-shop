import React from "react";
import {useAllFemaleProductsQuery} from "../redux/Products/productsApi";
import WomenProducts from "../components/WomenPage/WomenProducts/WomenProducts";
import Nav from "../components/WomenPage/Nav/Nav";
import SkeletonListOfProducts from "../common/Skeletons/ListOfProducts/SkeletonListOfProducts";
import Error from "../components/WomenPage/Error/Error";
import Filter from "../common/Filter/Filter";


const WomenPage = () => {

  const {data, isLoading, isError} = useAllFemaleProductsQuery();

  return (
    <>
      <Nav/>
      <div className="container">
        {
          isLoading
            ? <SkeletonListOfProducts />
            : data && !isError ? <WomenProducts data={data} /> : <Error/>
        }
      </div>
    </>
  );
};

export default WomenPage;
