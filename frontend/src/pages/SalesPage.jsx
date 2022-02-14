import React from "react";
import {useAllSaleProductsQuery} from "../redux/Products/productsApi";
import TitlePage from "../common/TitlePage/TitlePage";
import SkeletonProducts from "../common/Skeletons/SkeletonProducts/SkeletonProducts";
import Component from "../components/ProductsByGender/Products/Component";
import Empty from "../common/Empty/Empty";
import {ReactComponent as EmptyImage} from "../assets/image/storyset/ErrorMaleFemaleListOfProducts.svg";

const SalesPage = () => {

  const {data, isLoading, isError} = useAllSaleProductsQuery();

  return (
    <>
      <TitlePage title="Распродажа!"/>
      <div className="container">
        {
          isLoading
            ? <SkeletonProducts/>
            : data && !isError ? <Component data={data} isSale={true} />
              : <Empty
                Component={EmptyImage}
                text="Ошибка! Извините за неудобства,"
                span="мы уже решаем эту проблему"
              />
        }
      </div>
    </>
  );
};

export default SalesPage;
