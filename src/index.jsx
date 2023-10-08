import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultPage from "./Routes/DefaultPage";
import Login from "./Routes/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dentist/:id" element={<Detail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
