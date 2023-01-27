import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Questionario.css";

function Questionario() {

<<<<<<< HEAD
  const [post, setpost] = useState([]);
=======
const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [post, setpost] = useState([]);
  const [score, setScore] = useState(0);
>>>>>>> e16a7e59aa312a6aa80fdee4392b11b9774af4b8

  useEffect(() => {
    axios.get("http://localhost:1400/api/perguntas").then((res) => {
      setpost(res.data.data);
      console.log(res.data.data);
    });
  }, []);

<<<<<<< HEAD
=======
  function handleAnswerChange(event, index) {
    const newAnswers = [...submittedAnswers];
    newAnswers[index] = event.target.value;
    setSubmittedAnswers(newAnswers);
  }

  const points = [5, 5, 5, 5];
  function checkAnswers() {
    let newScore = 0;
    for (let i = 0; i < post.length; i++) {
      if (post[i] === submittedAnswers[i]) {
        newScore += points[i];
      }
    }
    setScore(newScore);
  }

  console.log(score);

>>>>>>> e16a7e59aa312a6aa80fdee4392b11b9774af4b8
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
<<<<<<< HEAD
      <button type="submit" value="Submit"  > Submit</button>
      <p>Total Score: </p>
=======
      <button type="submit" value="Submit" onClick={checkAnswers} > Submit</button>
      <p>Total Score: {score}</p>
>>>>>>> e16a7e59aa312a6aa80fdee4392b11b9774af4b8
      
    </div>
  );
}

export default Questionario;
