import React from "react";
import {useAllFemaleProductsQuery} from "../redux/Products/productsApi";
import Products from "../components/MaleFemaleProductsPage/Products/Products";
import Nav from "../components/MaleFemaleProductsPage/Nav/Nav";
import SkeletonListOfProducts from "../common/Skeletons/ListOfProducts/SkeletonListOfProducts";
import Error from "../components/MaleFemaleProductsPage/Error/Error";
import Title from "../common/Title/Title";


const WomenPage = () => {

  const {data, isLoading, isError} = useAllFemaleProductsQuery();

  return (
    <>
      <Title title="Онлайн магазин | Для женщин"/>
      <Nav gender="female"/>
      <div className="container">
        {
          isLoading
            ? <SkeletonListOfProducts />
            : data && !isError ? <Products data={data} isSale={false} /> : <Error/>
        }
      </div>
    </>
  );
};

export default WomenPage;
