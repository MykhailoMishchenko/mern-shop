import React from "react";
import styles from "./TopRatedProducts.module.scss";
import {useAllTopProductsQuery} from "../../../redux/Products/productsApi";
import Carousel from "./Carousel/Carousel";
import SkeletonCarousel from "../../../common/Skeletons/SkeletonCarousel/SkeletonCarousel";

const TopRatedProducts = () => {

  const {data, isLoading} = useAllTopProductsQuery();

  return (
    <div className="container">
      <h4 className={styles.title}>Лучшие Товары</h4>
      <>
        {
          isLoading
            ? <SkeletonCarousel/>
            : <Carousel data={data} />
        }
      </>
    </div>
  );
};

export default TopRatedProducts;
