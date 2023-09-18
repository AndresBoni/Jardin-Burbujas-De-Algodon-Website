import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Programas from "./components/Programas";
import Instalaciones from "./components/Instalaciones";
import Equipo from "./components/Equipo";
import Testimonios from "./components/Testimonios";
import Noticias from "./components/Noticias";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jardin-Burbujas-De-Algodon-Website/" element={<Home />} />
        <Route
          path="/Jardin-Burbujas-De-Algodon-Website/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/Jardin-Burbujas-De-Algodon-Website/login"
          element={<Login />}
        />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <Programas />
      <Instalaciones />
      <Equipo />
      <Testimonios />
      <Noticias />
      <Contacto />
      <Footer />
    </>
  );
};
export default App;
