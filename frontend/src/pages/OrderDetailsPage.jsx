import React from "react";
import Order from "../components/Order/Order";
import {useGetOrderQuery} from "../redux/Order/GetOrderById/getOrderById";

const OrderDetailsPage = ({match}) => {

  const {data, isLoading, error} = useGetOrderQuery(match.params.id)

  console.log(data);

  return (
    <div className="container">
      {
        isLoading
        ? <h1>Loading</h1>
          : <Order data={data}/>
      }
    </div>
  );
};

export default OrderDetailsPage;

//TODO: Сделать дизайн для кнопок (apple pay, google pay, НП), сделать лоадер для загрузки страницы