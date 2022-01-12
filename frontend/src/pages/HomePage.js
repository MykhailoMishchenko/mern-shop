import React from "react";
import Banner from "../components/HomePage/Banner/Banner";
import Advantages from "../components/HomePage/Advantages/Advantages";
import SecondBanner from "../components/HomePage/SecondBanner/SecondBanner";
import LastArticleInBlog from "../components/HomePage/LastArticleInBlog/LastArticleInBlog";
import Products from "../components/HomePage/ListOfProducts/Products";


const HomePage = () => {

  const data = [
    {
      image: "/sunglasses/men/GUESS_GU6959_07C_63_SMOKE_MIRROR.jpeg",
      name: "СОЛНЦЕЗАЩИТНЫЕ ОЧКИ GUESS GU6959 07C 63 SMOKE MIRROR",
      brand: "Guess",
      gender: "male",
      category: "sunglasses",
      frameForGlasses: "Авиатор",
      frameMaterial: "Металл",
      lensColor: "Черный",
      polarization: false,
      mirrored: true,
      gradient: false,
      lensMaterial: "polymer",
      sale: false,
      percent: 0,
      price: 1739,
      countInStock: 23,
      rating: 4.5,
      numReviews: 4,
      id: "1"
    },]

  return (
    <>
      <div className="container">
        <Banner />
      </div>
      <Advantages />
      <div className="container">
        <Products products={data}
                  gender="Для женщин"
                  filterGender="female"
                  nameForBtn="Смотреть все"
                  href="for-women"
                  pending={false}
        />
        <Products products={data}
                  gender="Для мужчин"
                  filterGender="male"
                  nameForBtn="Смотреть все"
                  href="for-men"
                  pending={true}
        />
        <SecondBanner />
        <LastArticleInBlog />
      </div>
    </>
  );
};

export default HomePage;
