import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './Components/Navbar/NavBar';
import LoginForm from "./Components/LoginForm/LoginForm";
import UserForm from "./Components/UserForm/UserFrom";

const App = () => {
  return (
    <>
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/login" element={<LoginForm/>} />
          <Route exact path="/register" element={<UserForm/>} />
        </Routes>
    </Router>
    </>
  );
};

export default App;
