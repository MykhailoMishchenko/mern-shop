import React, {useEffect} from "react";
import Table from "./Table/Table";
import {useGetMyOrdersQuery} from "../../../redux/Order/MyOrders/myOrdersApi";

const UserOrders = () => {

  const {data, isLoading, isError} = useGetMyOrdersQuery();

  return (
    <>
      <Table orders={data}/>
    </>
  );
};

export default UserOrders;
