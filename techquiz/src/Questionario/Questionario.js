import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Questionario.css";

function Questionario() {

const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [post, setpost] = useState([]);
  /*const [score, setScore] = useState(0);*/

  useEffect(() => {
    axios.get("http://localhost:1400/api/perguntas").then((res) => {
      setpost(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  function handleAnswerChange(event, index) {
    const newAnswers = [...submittedAnswers];
    newAnswers[index] = event.target.value;
    setSubmittedAnswers(newAnswers);
  }

  /*const points = [5, 5, 5, 5];
  function checkAnswers() {
    let newScore = 0;
    for (let i = 0; i < post.length; i++) {
      if (post[i] === submittedAnswers[i]) {
        newScore += points[i];
      }
    }
    setScore(newScore);
  }

  console.log(score);*/

  return (
    <div className="questionnaire">
      <h1>Questionnaire</h1>
      <h2>Qual destas é a resposta correta escreve a opacao correta </h2>
      {post?.length > 0 ? (
        post.map((value, key, score) => {
          return (
            <form className="questoes">
              <label>
                <p>{value.pergunta1}</p>
                <p> - {value.p1_r1}</p>
                <p> - {value.p1_r2} </p>
                <p> - {value.p1_r3} </p>
                <p> - {value.p1_r4} </p>
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
      <button type="submit" value="Submit" onClick={handleAnswerChange} > Submit</button>
      {/*<p>Total Score: {}</p>*/}
      
    </div>
  );
}

export default Questionario;
