import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

import AuthProvider from "./context/useAuthentication";
import { DarkModeProvider } from "./context/darkMode";
import App from "./App";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Login from "./Routes/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route
          Route
          path="/"
          element={
            <DarkModeProvider>
              <App />
            </DarkModeProvider>
          }
        >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
