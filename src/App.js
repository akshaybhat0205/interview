import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import CRUD from "./Interview/CRUD";
import ImageCarousal from "./Interview/ImageCarousal";
import FormValidation from "./Interview/FormValidation";
import Counter from "./Interview/Counter";
import StarRating from "./Interview/StarRating";
import TestFetch from "./Interview/TestFetch";
import UseFetchHookTest from "./Interview/TestFetch";
import FilterData from "./Interview/FilterData";
import { UserContext } from "./Interview/Context/UserContext";
import { useState } from "react";
import Dashboard from "./Interview/Context/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Interview/Context/Profile";
import isAuthenticatedHOC from "./Interview/IsAuthenticatedHOC";

function App() {
  const [user] = useState({
    name: "hello",
    isAuthenticated: true,
  });
  const [bio] = useState({
    designation: "React Developer",
    type: "Front End",
  });
  console.log("user", user);
  const AuthenticatedDashboard = isAuthenticatedHOC(Dashboard);
  const AuthenticatedProfile = isAuthenticatedHOC(Profile);
  return (
    <div className="App">
      <header className="App-header">
        {/* <CRUD/>
        <ImageCarousal/>
        <FormValidation />
        <Counter/> */}
        {/* <FormValidation /> */}
        {/* <StarRating/> */}
        <CRUD/>
        {/* <UseFetchHookTest/> */}
        {/* <FilterData/> */}
        {/* <UserContext.Provider value={{ user, bio }}>
          <Dashboard />
        </UserContext.Provider>  */}
        {/* <UserContext.Provider value={{ user, bio }}>
          <BrowserRouter>
            <Routes>
              <Route path="/dashboard" element={<AuthenticatedDashboard />} />
              <Route path="/profile" element={<AuthenticatedProfile />} />
              <Route path="/" element={<FormValidation/>} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
