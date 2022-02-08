import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToFavoriteRequest} from "../redux/Favorite/actions";
import Title from "../common/Title/Title";
import Main from "../components/FavoritePage/Main/Main";

const FavoriteProductsPage = ({match, location}) => {

  const id = match.params.id;
  const dispatch = useDispatch();
  const {favoriteItems} = useSelector(state => state?.favorite);

  useEffect(() => {
    if (id) {
      dispatch(addToFavoriteRequest(id));
    } else return
  }, []);

  return (
    <div>
      <div className="container">
        <Title title="Онлайн магазин | Избранное"/>
        <Main products={favoriteItems} />
      </div>
    </div>
  );
};

export default FavoriteProductsPage;
