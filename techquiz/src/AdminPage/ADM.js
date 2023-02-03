// All imports images
import { Link } from "react-router-dom";
import CS from "./img/interrogacao.png";

// Import css file
import "./Admin.css";

const HomePage = () => {
  return (
    <div className="container-adm">
      {/* contain all items */}
      <div className="grid-container-adm">
        {/* Conceitos Basicos */}
        <div className="grid-child-adm">
          <p className="titulo-adm">Edit Users</p>
          <div className="DescBtn-adm">
            <p className="Desc-adm">
              Aqui o admin podera editar/apagar os
              <br /> usuarios que forem registados
            </p>
            <Link to="/admin-edit-users"><button className="Btn-adm">Edit Users</button></Link>
          </div>
        </div>

        {/* Redes de Computadores */}
        <div className="grid-child-adm">
          <p className="titulo-adm">Edit Quiz's/Perguntas</p>
          <div className="DescBtn-adm">
            <p className="Desc-adm">
              Aqui o admin podera editar os quiz's inserir perguntas
              <br /> como inserir/atualizar/apagar
            </p>
            <Link to="/edit-quizs"><button className="Btn-adm">Edit Quiz's</button></Link>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="grid-child-adm">
          <img className="cs" alt="conceitos basicos-adm " src={CS} />
          <p className="titulo-adm">Coming Soon</p>
        </div>
        <div className="grid-child-adm">
          <img className="cs-adm" alt="conceitos basicos-adm " src={CS} />
          <p className="titulo-adm">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
