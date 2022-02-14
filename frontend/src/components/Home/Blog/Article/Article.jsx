import React from 'react';
import styles from "./Article.module.scss";
import {NavLink} from "react-router-dom";
import {cutMyString} from "../../../../utils/Blog";

const Article = ({post}) => {
  const {id, name, image, description} = post;
  return <NavLink to={`/blog/${id}`}>
    <div key={id} className={styles.article}>
      <img src={image} alt="Как выбрать очки?"/>
      <div className={styles.about}>
        <h3>{name}</h3>
        <p>{cutMyString(description)}</p>
      </div>
    </div>
  </NavLink>
};

export default Article;
