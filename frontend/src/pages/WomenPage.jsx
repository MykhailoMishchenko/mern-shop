import React from "react";
import TitlePage from "../common/TitlePage/TitlePage";
import {useAllFemaleProductsQuery} from "../redux/Products/productsApi";
import SkeletonProducts from "../common/Skeletons/SkeletonProducts/SkeletonProducts";
import Component from "../components/ProductsByGender/Products/Component";
import Empty from "../common/Empty/Empty";
import {ReactComponent as EmptyImage} from "../assets/image/storyset/ErrorMaleFemaleListOfProducts.svg";

const WomenPage = () => {

  const {data, isLoading, isError} = useAllFemaleProductsQuery();

  return (
    <>
      <TitlePage title="Для Женщин" />
      <div className="container">
        {
          isLoading
          ? <SkeletonProducts/>
            : data && !isError ? <Component data={data} />
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

export default WomenPage;
