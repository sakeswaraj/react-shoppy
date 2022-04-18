import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import SignInAndSignUp from "./pages/signIn-and-SignUp/SignIn-and-SignUp.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
