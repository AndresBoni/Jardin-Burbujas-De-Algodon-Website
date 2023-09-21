import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 bg-light">
          <div className="d-flex flex-column p-3">
            <h5>Menú</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/dashboard/secciones">
                  <i className="bi bi-layout-text-sidebar"></i> Secciones
                </Link>
              </li>
              <li>
                <Link to="/dashboard/grupos">
                  <i className="bi bi-people"></i> Grupos
                </Link>
              </li>
              <li>
                <Link to="/dashboard/comunicados">
                  <i className="bi bi-megaphone"></i> Comunicados
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="col-lg-10">
          {/* Contenido de las secciones */}
          {/* Añade el contenido de cada sección en función de la navegación */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
