import React, { useState } from "react";
import "./QuizStatic.css";


export default function App() {
  






  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////



  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  const questions = [
    {
      questionText:
        "Qual o tipo utilizado para definir uma variavel de numero inteiro?",
      answerOptions: [
        { answerText: "float", isCorrect: false },
        { answerText: "boolean", isCorrect: false },
        { answerText: "int", isCorrect: true },
        { answerText: "char", isCorrect: false },
      ],
    },
    {
      questionText: "O que se usa para comentar uma linha de codigo ?",
      answerOptions: [
        { answerText: "#", isCorrect: false },
        { answerText: "//", isCorrect: true },
        { answerText: "/**/", isCorrect: false },
        { answerText: "###", isCorrect: false },
      ],
    },
    {
      questionText:
        "O que se define uma variavel que me retorne True or False?",
      answerOptions: [
        { answerText: "boolean", isCorrect: true },
        { answerText: "intiger", isCorrect: false },
        { answerText: "float", isCorrect: false },
        { answerText: "string", isCorrect: false },
      ],
    },
    {
      questionText: "Qual destas linahs de codigo esta certa?",
      answerOptions: [
        { answerText: "int num = 2,5;", isCorrect: false },
        { answerText: "int num = 2", isCorrect: false },
        { answerText: "intiger num = 2;", isCorrect: false },
        { answerText: "float num = 5.25;", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleUpdate = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <p>
            <br />
            <br />
            <br />
            <button className="btn-submit-2" onClick={handleUpdate}>
              Restart
            </button>
          </p>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="btn-submit"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
