import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import BookDetails from "./pages/BookDetails";
import Basket from "./pages/details/Basket";
import Register from "./pages/register/Register";
import Login from "./pages/register/Login";
import LogOut from "./pages/register/LogOut";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookdetail/:id" element={<BookDetails />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Logout" element={<LogOut />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
