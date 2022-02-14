import React from "react";
import styles from "./Blog.module.scss";
import {NavLink} from "react-router-dom";
import Article from "./Article/Article";
import {articles} from "../../../assets/articles";

const Blog = () => {

  const newPosts = articles.slice(-3);
  const reversePosts = newPosts.reverse();

  return (
    <>
      <section className={styles.blog}>
        <div className={styles.nav}>
          <h2>Последнее в нашем блоге</h2>
          <NavLink to="/blog">Смотреть все</NavLink>
        </div>
        <div className={styles.main}>
          {
            reversePosts.map(post => {
              return <Article key={post._id} post={post}/>
            })
          }
        </div>
      </section>
    </>
  );
};

export default Blog;
