import "./App.css";
import React, { useState, useEffect } from "react";
import UserProfile from "./Components/UserProfile.js";
import Header from "./Components/Header.js";
import HomePage from "./Components/HomePage.js";
import MyChatComponent from "./Components/MyChatComponent.js";
import LoginForm from "./Components/LogInForm.js";
import AddWalkForm from "./Components/AddWalkForm";
import AllWalks from "./Components/AllWalks";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";
import IndividualWalk from "./Components/IndividualWalk";

function App() {
  const [loggedIn, setLoggedIn] = useState([]);
  const [Walks, setWalks] = useState([]);
  const [Users, setUsers] = useState([]);

  const dataToChatComponent = () => {
    //send data to chatComponent using this function
  };

  const handleLoggedInData = (loggedInData) => {
    //function for getting data from child component SignUpForm
    setLoggedIn(loggedInData);
  };

  const handleAddWalk = (newWalk) => {
    setWalks((state) => [...state, newWalk]);
  };

  const handleAddUser = (newUser) => {
    setUsers((state) => [...state, newUser]);
  };

  return (
    <div>
      {/* <Header sessionProps={loggedIn} /> */}

      <Header sessionProps={loggedIn} />

      <Routes>
        <Route
          path="/user/:username"
          element={<UserProfile sessionProps={loggedIn} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<MyChatComponent />} />
        <Route
          path="/login"
          element={
            <LoginForm
              loggedInData={(loggedInData) => handleLoggedInData(loggedInData)}
            />
          }
        />
        <Route
          path="/addwalkform"
          element={
            <AddWalkForm addWalk={(newWalk) => handleAddWalk(newWalk)} />
          }
        />
        <Route path="/allwalks" element={<AllWalks Walksprop={Walks} />} />
        <Route
          path="/signup"
          element={<SignUpForm addUser={(newUser) => handleAddUser(newUser)} />}
        />
        <Route path="/walk/:id" element={<IndividualWalk />} />
      </Routes>
    </div>
  );
}
//I am not sure why we need to add the IndividualWalk and Userprofile here but is the only way that It works, help
export default App;
