import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToFavoriteRequest} from "../redux/Favorite/actions";
import Title from "../common/Title/Title";
import FavoriteProducts from "../components/FavoritePage/FavoriteProducts/FavoriteProducts";

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
        <FavoriteProducts products={favoriteItems} />
      </div>
    </div>
  );
};

export default FavoriteProductsPage;
