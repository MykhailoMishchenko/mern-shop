import React from "react";
import Banner from "../components/HomePage/Banner/Banner";
import Advantages from "../components/HomePage/Advantages/Advantages";
import SecondBanner from "../components/HomePage/SecondBanner/SecondBanner";
import LastArticleInBlog from "../components/HomePage/LastArticleInBlog/LastArticleInBlog";
import Products from "../components/HomePage/ListOfProducts/Products";
import {useGetFemaleProductsQuery, useGetMaleProductsQuery} from "../redux/Products/productsApi";
import FixedBottomAlert from "../common/Alert/FixedBottomAlert/FixedBottomAlert";


const HomePage = () => {

  const {
    data: femaleProducts = [],
    isLoading: isLoadingFemale,
    isError: isErrorFemale,
    error: errorFemale
  } = useGetFemaleProductsQuery()

  const {
    data: maleProducts = [],
    isLoading: isLoadingMale,
    isError: isErrorMale,
    error: errorMale
  } = useGetMaleProductsQuery()

  return (
    <>
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
                  pending={isLoadingFemale}
        />
        <Products products={maleProducts}
                  gender="Для мужчин"
                  filterGender="male"
                  nameForBtn="Смотреть все"
                  href="men"
                  pending={isLoadingMale}
        />
        <SecondBanner />
        <LastArticleInBlog />
      </div>
      {isErrorFemale && <FixedBottomAlert
        color="red"
        msg={
          errorFemale.status === 500
            ? "Возникла непредвиденная ошибка, обновите страницу или попробуйте позже"
            : "Ошибка! Извините за неудобства, мы уже решаем эту проблему"
        }
      />
      }
      {isErrorMale && <FixedBottomAlert
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
