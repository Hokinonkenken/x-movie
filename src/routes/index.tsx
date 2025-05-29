// src/routes/index.tsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import FilmDetail from "../pages/FilmDetail";
import AddFilm from "../pages/AddFilm";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/films/:id" element={<FilmDetail />} />
      <Route
        path="/add-film"
        element={
          <ProtectedRoute>
            <AddFilm />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
