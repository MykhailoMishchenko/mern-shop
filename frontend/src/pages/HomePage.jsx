import React from "react";
import {useGetFemaleProductsQuery, useGetMaleProductsQuery} from "../redux/Products/productsApi";
import TitlePage from "../common/TitlePage/TitlePage";
import Banner from "../components/Home/Banner/Banner";
import Advantages from "../components/Home/Advantages/Advantages";
import Products from "../components/Home/Products/Products";
import SecondBanner from "../components/Home/SecondBanner/SecondBanner";
import Blog from "../components/Home/Blog/Blog";
import Alert from "../common/Alerts/Alert/Alert";

const HomePage = () => {

  const
    {
      data: femaleProducts = [],
      isLoading: isLoadingFemale,
      isError: isErrorFemale,
      error: errorFemale
    } = useGetFemaleProductsQuery(),
    {
      data: maleProducts = [],
      isLoading: isLoadingMale,
      isError: isErrorMale,
      error: errorMale
    } = useGetMaleProductsQuery();

  return (
    <>
      <TitlePage />
      <div className="container">
        <Banner />
      </div>
      <Advantages />
      <div className="container">
        <Products products={femaleProducts}
                  gender="Для женщин"
                  filterGender="female"
                  nameForBtn="Смотреть все"
                  href="women"
                  loading={isLoadingFemale}
        />
        <Products products={maleProducts}
                  gender="Для мужчин"
                  filterGender="male"
                  nameForBtn="Смотреть все"
                  href="men"
                  loading={isLoadingMale}
        />
        <SecondBanner />
        <Blog />
      </div>
      {
        isErrorFemale &&
        <Alert
          color="red"
          msg={
            errorFemale.status === 500
              ? "Возникла непредвиденная ошибка, обновите страницу или попробуйте позже"
              : "Ошибка! Извините за неудобства, мы уже решаем эту проблему"
          }
        />
      }
      {
        isErrorMale &&
        <Alert
          color="red"
          msg={
            errorMale.status === 500
              ? "Возникла непредвиденная ошибка, обновите страницу или попробуйте позже"
              : "Ошибка! Извините за неудобства, мы уже решаем эту проблему"
          }
        />
      }
    </>
  );
};

export default HomePage;
