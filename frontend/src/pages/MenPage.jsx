import React from "react";
import {useAllMaleProductsQuery} from "../redux/Products/productsApi";
import TitlePage from "../common/TitlePage/TitlePage";
import SkeletonProducts from "../common/Skeletons/SkeletonProducts/SkeletonProducts";
import Component from "../components/ProductsByGender/Products/Component";
import Empty from "../common/Empty/Empty";
import {ReactComponent as EmptyImage} from "../assets/image/storyset/ErrorMaleFemaleListOfProducts.svg";

const MenPage = () => {

  const {data, isLoading, isError} = useAllMaleProductsQuery();

  return (
    <>
      <TitlePage title="Для Мужчин" />
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

export default MenPage;
