import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Questionario.css";

function Questionario() {

  const [post, setpost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1400/api/perguntas").then((res) => {
      setpost(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <div className="questionnaire">
      <h1>Questionnaire</h1>
      <h2>Qual destas é a resposta correta escreve a opacao correta </h2>
      {post?.length > 0 ? (
        post.map((value, key, score) => {
          return (
            <form className="questoes">
              <label>
                <p>{value.perguntas}</p>
                <p> - {value.resposta1}</p>
                <p> - {value.resposta2} </p>
                <p> - {value.resposta3} </p>
                <p> - {value.resposta4} </p>
                <input className="inoput-q" type="text" />
              </label>
            </form>
          );
        })
      ) : (
        <div className="title">Data Loading.. </div>
      )}
      <button type="submit" value="Submit"  > Submit</button>
      <p>Total Score: </p>
      
    </div>
  );
}

export default Questionario;
