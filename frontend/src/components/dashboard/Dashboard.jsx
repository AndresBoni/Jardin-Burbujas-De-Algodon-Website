import React from "react";
import "../styles/Dashboard.css";
import CardDashboard from "./CardDashboard";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";
import edit from "../../assets/edit.png";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <span className="title-dashboard">Hola Fernando!</span>
        <span>Te damos la bienvenida a tu panel {":)"}</span>
        <div className=" mt-4 d-flex flex-column">
          <span className="sub-title mb-3">Noticias</span>
          <div className="d-flex flex-row gap-4">
            <CardDashboard title={"Agregar Noticia"} icon={add} />
            <CardDashboard title={"Eliminar Noticia"} icon={remove} />
            <CardDashboard title={"Editar Noticia"} icon={edit} />
          </div>
        </div>
        <div className="mt-4">
          <span className="sub-title mb-2 mt-4">Eventos</span>
          <div className="d-flex flex-row gap-4">
            <CardDashboard title={"Agregar"} icon={add} />
            <CardDashboard title={"Eliminar"} icon={remove} />
            <CardDashboard title={"Editar"} icon={edit} />
          </div>
        </div>
        <div className="mt-4">
          <span className="sub-title mb-2 mt-4">Secciones</span>
          <div className="d-flex flex-row gap-4">
            <div className="d-flex flex-row gap-4">
              <CardDashboard title={"Ordenar"} icon={edit} />
              <CardDashboard title={"Mostrar/Ocultar"} icon={remove} />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <span className="sub-title mb-2 mt-4">Información</span>
          <div className="d-flex flex-row gap-4">
            <CardDashboard title={"Editar información web"} icon={edit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
