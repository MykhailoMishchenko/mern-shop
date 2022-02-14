import React from "react";
import styles from "./Favorite.module.scss";
import {ReactComponent as Like} from "../../../../assets/image/icon/heart.svg";

const Favorite = ({isFavorite, history, addToFavoriteHandler}) => {
  return (
    <>
      {
        isFavorite
          ? <i onClick={() => history.push("/favorite")} className={`${styles.favorite} fas fa-heart heart`}></i>
          : <Like className={styles.favorite} onClick={addToFavoriteHandler} />
      }
    </>
  );
};

export default Favorite;
