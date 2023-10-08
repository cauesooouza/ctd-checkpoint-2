import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  App from "./App"
import DefaultPage from "./Routes/DefaultPage";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        < Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dentist/:id" element={<Detail />}/>
          <Route path="#" element={<DefaultPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
