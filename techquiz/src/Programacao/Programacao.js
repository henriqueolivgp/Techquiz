import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Prog.css";

function Programacao() {

  let history = useHistory();

  const [post, setpost] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:1400/api/quiz").then((res) => {
      setpost(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <div className="content-prog">
      <div className="fraseini-prog">
        <h2>Programacao</h2>
        <a href="#/" className="frase-prog">
          Faça agora o quiz de Conceiros Básicos da Informática, para saber o
          seu nível de conhecimentos relativos a Conceitos Básicos da
          Informática .
        </a>
      </div>
      <div className="box-prog">
        {post?.length > 0 ? (
          post.map((value, key) => {
            return (
              <>
                <div className="grid-container-prog">
                  <div className="grid-child-prog">
                    <h2 >{value.nome}</h2>
                    <p >{value.descricao}</p>
                    <button onClick={() => {history.push(`/questionario/${value.id_quiz}`)}} className="button-HTML">Começar Quiz</button>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="title">Data Loading.. </div>
        )}
      </div>
    </div>
  );
}

export default Programacao;
