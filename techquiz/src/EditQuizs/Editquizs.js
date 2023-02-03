// All imports images
import { Link } from "react-router-dom";
import CS from "./img/interrogacao.png";

// Import css file
import "./Editquizs.css";

const HomePage = () => {
  return (
    <div className="container-quiz">
      {/* contain all items */}
      <div className="grid-container-quiz">
        {/* Conceitos Basicos */}
        <div className="grid-child-quiz">
          <p className="titulo-quiz">Insert New Quiz</p>
          <div className="DescBtn-quiz">
            <p className="Desc-quiz">
              Aqui inserir um novo quiz
            </p>
            <Link to="/edit-quiz-insert"><button className="Btn-quiz">Insert</button></Link>
          </div>
        </div>

        {/* Redes de Computadores */}
        <div className="grid-child-quiz">
          <p className="titulo-quiz">Edit Quiz's</p>
          <div className="DescBtn-quiz">
            <p className="Desc-quiz">
              Aqui podera editar os quiz's
              <br /> como inserir/atualizar/apagar
            </p>
            <Link><button className="Btn-quiz">Edit Quiz's</button></Link>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="grid-child-quiz">
        <p className="titulo-quiz">Insert new questions</p>
          <div className="DescBtn-quiz">
            <p className="Desc-quiz">
              Aqui podera inserir novas perguntas
            </p>
            <Link><button className="Btn-quiz">Edit Quiz's</button></Link>
          </div>
        </div>
        <div className="grid-child-quiz">
          <img className="cs-quiz" alt="conceitos basicos-quiz " src={CS} />
          <p className="titulo-quiz">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
