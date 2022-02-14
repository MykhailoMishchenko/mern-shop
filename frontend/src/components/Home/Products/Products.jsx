import React from "react";
import styles from "./Products.module.scss";
import {useHistory} from "react-router-dom";
import SkeletonProducts from "../../../common/Skeletons/SkeletonProducts/SkeletonProducts";
import {ReactComponent as EmptyImage} from "../../../assets/image/storyset/emptyProducts.svg";
import Empty from "../../../common/Empty/Empty";
import Product from "../../../common/Product/Product";

const Products = ({products, gender, nameForBtn, href, loading}) => {

  const history = useHistory();

  return (
    <>
      <section className={styles.productsSection}>
        <div className="container">
          <h2>{gender}</h2>
          <div className={styles.main}>
            {
              loading
                ? <SkeletonProducts/>
                : products.length === 0
                  ? <Empty Component={EmptyImage} text="Мы работаем над добавлением" span="нового товара"/>
                  : products.map(product => {
                    return <Product key={product._id} product={product} />;
                  })
            }
          </div>
          <button onClick={() => history.push(`/${href}`)} className={styles.button}>{nameForBtn}</button>
        </div>
      </section>
    </>
  );
};

export default Products;
