import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Counter from "../pages/Counter";
import Items from "../pages/Items";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import type { JSX } from "react";

const Routed = (): JSX.Element => {

  const user =
    !!localStorage.getItem("user") &&
    !!localStorage.getItem("logged");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/counter"
          element={user ? <Counter /> : <Navigate to="/login" />}
        />

        <Route
          path="/item"
          element={user ? <Items /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routed;