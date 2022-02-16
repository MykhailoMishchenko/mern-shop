import React, {useEffect} from "react";
import styles from "./UserOrders.module.scss";
import Table from "./Table/Table";
import SkeletonTable from "../../../common/Skeletons/SkeletonTable/SkeletonTable";
import {useDispatch, useSelector} from "react-redux";
import {getMyOrders} from "../../../redux/Order/MyOrders/actions";

const UserOrders = () => {

  const {myOrders, loading} = useSelector(state => state?.myOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders())
  }, [])


  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Мои заказы</h4>
      {
        loading
          ? <SkeletonTable />
          : <Table orders={myOrders} />
      }
    </div>
  );
};

export default UserOrders;
