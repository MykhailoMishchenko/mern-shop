import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToFavoriteRequest} from "../redux/Favorite/actions";
import TitlePage from "../common/TitlePage/TitlePage";
import Favorite from "../components/Favorite/Favorite";
import {useHistory} from "react-router-dom";

const FavoriteProductsPage = ({match}) => {

  const
    id = match.params.id,
    dispatch = useDispatch(),
    history = useHistory(),
    {favoriteItems, loading} = useSelector(state => state?.favorite);

  useEffect(() => {
    if (id) {
      dispatch(addToFavoriteRequest(id));
    } else return;
  }, []);

  return (
    <div className="container">
      <TitlePage title="Любимые товары"/>
      <Favorite
        dispatch={dispatch}
        loading={loading}
        history={history}
        products={favoriteItems}
      />
    </div>
  );
};

export default FavoriteProductsPage;
