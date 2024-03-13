import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthContext from "./Context/AuthContext.js";

// Components
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";

// Page
import HomePage from "./Pages/HomePage.jsx";
import RegistrationPage from "./Pages/RegistrationPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import Basket from "./Pages/Basket.jsx";
import MotorCycleCatalogPage from "./Pages/MotorCycleCatalogPage.jsx";

// Styles
import "./App.css";
import "./Style/Footer.css";
import "./Style/Header.css";
import "./Style/HomePage.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedMoto, setSelectedMoto] = useState(null);
  const addToCart = (moto) => {
    setSelectedMoto(moto)
  };
  const removeFromCart = () => {
    setSelectedMoto(null); 
  };

  return (
    <>
    
      <AuthContext.Provider
        value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
      >
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inscription" element={<RegistrationPage />} />
            <Route path="/connexion" element={<LoginPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/basket" element={<Basket selectedMoto={selectedMoto} removeFromCart={removeFromCart}/>} />
            <Route path="/catalog" element={<MotorCycleCatalogPage addToCart={addToCart}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
