import React from 'react';
import styles from "./LastArticleInBlog.module.scss";
import {NavLink} from "react-router-dom";
import {articles} from "../../../assets/articles";
import Article from "../../../common/Article/Article";

const LastArticleInBlog = () => {

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

export default LastArticleInBlog;
