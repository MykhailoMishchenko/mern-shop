import React from "react";
import UserDetails from "../components/Profile/UserDetails/UserDetails";
import UserOrders from "../components/Profile/UserOrders/UserOrders";
import {useSelector} from "react-redux";
import AdminSettings from "../components/Profile/AdminSettings/AdminSettings";

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
    </div>
  );
};

export default ProfilePage;
