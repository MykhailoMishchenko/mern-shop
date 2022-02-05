import React from "react";
import UserDetails from "../components/ProfilePage/UserDetails/UserDetails";
import UserOrders from "../components/ProfilePage/UserOrders/UserOrders";
import FixedBottomAlert from "../common/Alert/FixedBottomAlert/FixedBottomAlert";
import {useSelector} from "react-redux";

const ProfilePage = () => {
  return (
      <div className="container">
        <div className="flex-row">
          <UserDetails />
          <UserOrders />
        </div>
      </div>
  );
};

export default ProfilePage;
