import React from "react";
import styles from "./Products.module.scss";
import SkeletonListOfProducts from "../../../common/Skeletons/ListOfProducts/SkeletonListOfProducts";
import Product from "./Product";
import EmptyProducts from "../../../common/EmptyPage/ListOfProduct/EmptyProducts";
import {useHistory} from "react-router-dom";

const Products = ({products, gender, nameForBtn, href, pending}) => {

  const history = useHistory();

    return (
        <>
            <section className={styles.productsSection}>
            <div className="container">
                {gender && <h2>{gender}</h2>}
              <div className={styles.main}>
                {
                  pending
                  ? <SkeletonListOfProducts/>
                  : products.length === 0
                      ? <EmptyProducts/>
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
