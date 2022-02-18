import React from "react";
import UserDetails from "../components/Profile/UserDetails/UserDetails";
import UserOrders from "../components/Profile/UserOrders/UserOrders";
import {useSelector} from "react-redux";
import AdminSettings from "../components/Profile/AdminSettings/AdminSettings";
import {NavLink} from "react-router-dom";

const ProfilePage = () => {

  const {user} = useSelector(state => state?.profile);

  return (
    <div className="container">
      <div className="flex-row">
        <UserDetails/>
        {
          user?.isAdmin
          ? <AdminSettings/>
          : <UserOrders/>
        }
      </div>
      <NavLink to="/admin/customers">Customers</NavLink>
    </div>
  );
};

export default ProfilePage;


// TODO: Создать RTK Query для user details, нужно исправить баг (выводятся все заказы, всех пользователей), сделать лоадер.