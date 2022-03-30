import React from "react";
import { useSelector } from "react-redux";
import { Component } from "react";
import { Redirect } from 'react-router-dom';

const Profile = ({component: roles}) => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container">
      <header className="">
        <h3>
         WELCOME TO YOUR PROFILE  <strong>{currentUser.username}</strong>
        </h3>
      </header>
      <p>
        Your <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        Your <strong>Email:</strong> {currentUser.email}
      </p>Your 
      <strong>   Role:</strong>        {currentUser.roles}

    </div>
  );
};

export default Profile;
