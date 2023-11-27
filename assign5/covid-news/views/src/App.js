import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AllStates from "./components/AllStates/AllStates";
import State from "./components/State/State";
import Footer from "./components/Shared/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/states" element={<AllStates />}></Route>
        <Route path="/state/:stateName/:code" element={<State />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
