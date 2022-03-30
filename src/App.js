import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// custom component
import ListQues from "./Quesbankpractice/ListQues";
import Navbar from "./Components/Navbar";
import QuesSet from "./Quesbankpractice/QuesSet";
import AddQues from "./Quesbankpractice/AddQues";
import Updateques from "./Quesbankpractice/Updateques";
import Mcq from "./Quesbankpractice/Mcq";
import ListMcq from "./Quesbankpractice/ListMcq";
import SingIn from "./Components/SingIn";
import SignUp from "./Components/SignUp";
import FileUpload from "./Components/FileUpload"
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from './Components/Home'
import Profile from "./Components/Profile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand  navbar-dark text-warning shadow ">
    <div className="navhead">CUTM</div> 


          {currentUser ? (
            <div className="navbar-nav text-dark ">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/profile"} className="nav-link  text-dark ">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link text-dark" onClick={logOut}>
                <FiLogOut/>
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"}  className="nav-link  text-dark">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link text-dark">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path='/Home' component={Home} />
  
          <Route exact path="/signin" component={SingIn} />
        <Route exact path="/signup" component={SignUp} />
        
        <Route exact path="/queset" component={QuesSet} />
        <Route exact path="/file" component={FileUpload} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/list" component={ListQues} />
        <Route exact path="/addques" component={AddQues} />
        <Route exact path="/update-ques/:id" component={Updateques} />
        <Route exact path="/addmcq" component={Mcq} />
        <Route exact path="/listmcq" component={ListMcq} />
          

        </Switch>
      </div>

    </Router>
  );
};

export default App;
