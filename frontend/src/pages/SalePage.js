import React from "react";
import {useAllSaleProductsQuery} from "../redux/Products/productsApi";
import Nav from "../components/MaleFemaleProductsPage/Nav/Nav";
import SkeletonListOfProducts from "../common/Skeletons/ListOfProducts/SkeletonListOfProducts";
import Products from "../components/MaleFemaleProductsPage/Products/Products";
import Error from "../components/MaleFemaleProductsPage/Error/Error";
import Title from "../common/Title/Title";

const SalePage = () => {

  const {data, isLoading, isError} = useAllSaleProductsQuery();

  return (
    <div>
      <Title title="Онлайн магазин | Расродажа"/>
      <Nav sale={true}/>
      <div className="container">
        {
          isLoading
            ? <SkeletonListOfProducts />
            : data && !isError ? <Products data={data} isSale={true} /> : <Error/>
        }
      </div>
    </div>
  );
};

export default SalePage;
