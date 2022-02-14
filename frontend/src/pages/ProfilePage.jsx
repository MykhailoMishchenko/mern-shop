import React from "react";
import UserDetails from "../components/Profile/UserDetails/UserDetails";
import UserOrders from "../components/Profile/UserOrders/UserOrders";

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="flex-row">
        <UserDetails/>
        <UserOrders/>
      </div>
    </div>
  );
};

export default ProfilePage;
